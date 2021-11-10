const Model = (() => {
	const fetchTodos = () => {
		return fetch('http://localhost:8000/api/todos').then((response) => response.json()) //return a promise
	}

	const addTodo = (todo) => {
		return fetch('http://localhost:8000/api/todo/create', {
			method: 'POST',
			body: JSON.stringify(todo), //todo is an object
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}).then((response) => {
			console.log(response.ok)
			if (!response.ok) {
				throw new Error('HTTP status ' + response.status)
			}
			return response.json()
		}) //return a promise
	}

	const deleteTodo = (id) => {
		return fetch(`http://localhost:8000/api/todo/${id}/delete`, {
			method: 'DELETE',
		}).then((response) => {
			console.log(response.ok)
			if (!response.ok) {
				console.log(response)
				throw new Error('HTTP status ' + response.status)
			}
			return response.json()
		}) //return a promise
	}

	const editTodo = (id, obj) => {
		console.log(id, obj)
		return fetch(`http://localhost:8000/api/todo/${id}/update`, {
			method: 'PUT',
			body: JSON.stringify(obj),
		}).then((response) => {
			console.log(response.ok)
			if (!response.ok) {
				throw new Error('HTTP status ' + response.status)
			}
			return response.json()
		}) //return a promise
	}

	return { fetchTodos, addTodo, deleteTodo, editTodo } //same as { fetchTodos: fetchTodos }
})()

const View = (() => {
	const domString = {
		todoListContainer: '.todolist-wrapper',
		todoListContent: '.todolist__content',
		todoListAdd: '.btn-add',
		todoListInput: '.todolist__header-input',
		todoListDelete: '.btn-delete',
		todoListEdit: '.btn-edit',
	}
	const render = (template, element) => {
		element.innerHTML = template
	}

	const generateTodoItem = (todo) => {
		const title = todo.task.length > 30 ? todo.task.substring(0, 30) + '...' : todo.task
		return `<li id="${todo._id}" class="todolist__row todolist__content-item"><span class="todolist__content-item-title">${title}</span> <button class="btn btn-edit">Edit</button> <button class="btn btn-delete">Delete</button></li>`
	}
	const initTodoListTemplate = () => {
		return `<section class='todolist'>
		<header class='todolist__header'> 
			<h1 class='todolist__header-title'>To Do List</h1>
			<div class='todolist__row todolist__input-wrapper'> 
				<input class='todolist__header-input' placeholder="Todo..."/> <button class='btn btn-add'> Add</button>
			</div>
			
		</button>
		</header>
		<ul class='todolist__content'></ul>
	</section>`
	}
	return { domString, render, generateTodoItem, initTodoListTemplate }
})()

const AppController = ((model, view) => {
	let todolistdata
	const init = () => {
		const initTemplate = view.initTodoListTemplate()
		const initElement = document.querySelector(view.domString.todoListContainer)
		view.render(initTemplate, initElement)
		fetchData() //we call fetch data inside init
		setUpAddEvent()
	}

	const updateTodoListItems = (data) => {
		let todoListTemple = data
			.map((todo) => {
				return view.generateTodoItem(todo)
			})
			.join('') //convert array to string/we will get string, TodoListTemple will be string
		//console.log('todoListTemple,', todoListTemple)
		const todoListElement = document.querySelector(view.domString.todoListContent)
		view.render(todoListTemple, todoListElement)
		setUpDeleteEvent() //update delete event handler to include the newly added li's delete button
		setUpEditEvent() //update edit event handler to include the newly added li's edit button
	}

	const fetchData = () => {
		model.fetchTodos().then((data) => {
			//model.fetchTodos() return promise
			//console.log('data:', data) //array
			todolistdata = data
			updateTodoListItems(todolistdata)
		})
	}

	const setUpDeleteEvent = () => {
		let ulElemenet = document.querySelector(view.domString.todoListContent)
		ulElemenet.onclick = (event) => {
			//should not use addEventListener because it will allow same event be added to the same element
			if (event.target.classList.contains('btn-delete')) {
				//console.log(event.target)
				//console.log(event.target.parentElement)
				alert('de')
				model
					.deleteTodo(event.target.parentElement.id)
					.then((data) => {
						//console.log('data:', data)
						event.target.parentElement.style.display = 'none'

						todolistdata = todolistdata.filter((item) => {
							if (item._id !== event.target.parentElement.id) {
								return true
							}
						})
						updateTodoListItems(todolistdata)
					})
					.catch((err) => {
						console.log('error occurred:', err)
					})
			}
		}
	}

	const setUpEditEvent = () => {
		let ulElemenet = document.querySelector(view.domString.todoListContent)
		ulElemenet.onclick = (event) => {
			if (event.target.classList.contains('btn-edit')) {
				console.log(event.target)
				let newTitle = prompt('Enter new title')
			}
		}
		// const btnEditList = document.querySelectorAll(view.domString.todoListEdit)
		// console.log(btnEditList)
		// btnEditList.forEach((btnEdit) => {
		// 	btnEdit.addEventListener('click', () => {
		// 		console.log(btnEdit.parentElement.id)
		// 		let newTitle = prompt('Enter new title')
		// 		model
		// 			.editTodo(btnEdit.parentElement.id, { task: newTitle })
		// 			.then((data) => {
		// 				console.log('data:', data)
		// 			})
		// 			.catch((err) => {
		// 				console.log('error occurred:', err)
		// 			})
		// 	})
		// })
	}

	const setUpAddEvent = () => {
		//for add
		const btnAdd = document.querySelector(view.domString.todoListAdd)
		const todolistInput = document.querySelector(view.domString.todoListInput)
		btnAdd.addEventListener('click', () => {
			model
				.addTodo({
					task: todolistInput.value,
				})
				.then((data) => {
					console.log('data:', data)
					todolistdata.unshift(data.task)
					updateTodoListItems(todolistdata)
				})
				.catch((err) => {
					console.log('error occurred:', err)
				})
		})
	}

	return { init }
})(Model, View)

AppController.init()
