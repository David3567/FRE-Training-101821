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
	//let todolistdata
	const init = () => {
		const initTemplate = view.initTodoListTemplate()
		const initElement = document.querySelector(view.domString.todoListContainer)
		view.render(initTemplate, initElement)
		fetchData() //we call fetch data inside init
		setUpAddEvent()
	}

	const updateTodoListItems_initialLoad = (data) => {
		let todoListTemple = data
			.map((todo) => {
				return view.generateTodoItem(todo)
			})
			.join('') //convert array to string/we will get string, TodoListTemple will be string
		//console.log('todoListTemple,', todoListTemple)
		const todoListElement = document.querySelector(view.domString.todoListContent)
		view.render(todoListTemple, todoListElement)
		setUpDeleteEvent_initialLoad() //after we render todolist items for the first time, then we setup delete event
		setUpEditEvent_initialLoad() //after we render todolist items for the first time, then we setup edit event
	}

	const fetchData = () => {
		model.fetchTodos().then((data) => {
			//model.fetchTodos() return promise
			console.log('data:', data) //array
			updateTodoListItems_initialLoad(data)
		})
	}

	const setUpDeleteEvent_initialLoad = () => {
		const btnDeleteList = document.querySelectorAll(view.domString.todoListDelete)

		btnDeleteList.forEach((btnDelete) => {
			btnDelete.addEventListener('click', () => {
				console.log(btnDelete.parentElement.id)
				model
					.deleteTodo(btnDelete.parentElement.id)
					.then((data) => {
						console.log('data:', data)
						document.getElementById(btnDelete.parentElement.id).style.display = 'none'
					})
					.catch((err) => {
						console.log('error occurred:', err)
					})
			})
		})
	}

	const setUpEditEvent_initialLoad = () => {
		const btnEditList = document.querySelectorAll(view.domString.todoListEdit)
		console.log(btnEditList)
		btnEditList.forEach((btnEdit) => {
			btnEdit.addEventListener('click', () => {
				console.log(btnEdit.parentElement.id)
				let newTitle = prompt('Enter new title')
				model
					.editTodo(btnEdit.parentElement.id, { task: newTitle })
					.then((data) => {
						console.log('data:', data)
					})
					.catch((err) => {
						console.log('error occurred:', err)
					})
			})
		})
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
					// todolistdata.unshift(data.task)
					// updateTodoListItems(todolistdata)
					let element = document.createElement('li')
					element.setAttribute('id', data.task._id)
					element.classList.add('todolist__row')
					element.classList.add('todolist__content-item')
					element.innerHTML = `<span class='todolist__content-item-title'>${data.task.task}</span> <button class="btn btn-edit">Edit</button> <button class='btn btn-delete'>Delete</button>`
					let parentElement = document.querySelector('.todolist__content')
					parentElement.insertBefore(element, parentElement.firstChild)

					//setup delete event listener for this new item
					let button = element.querySelector('.btn-delete') //select the newly added li element's delete button
					button.addEventListener('click', () => {
						console.log(button.parentElement.id)
						model
							.deleteTodo(button.parentElement.id)
							.then((data) => {
								console.log('data:', data)
								document.getElementById(button.parentElement.id).style.display = 'none'
							})
							.catch((err) => {
								console.log('error occurred:', err)
							})
					})

					//setup edit event listener for this new item
					let buttonEdit = element.querySelector('.btn-edit') //select the newly added li element's delete button
					buttonEdit.addEventListener('click', () => {
						console.log(buttonEdit.parentElement.id)
						let newTitle = prompt('Enter new title')
						model
							.editTodo(buttonEdit.parentElement.id, { task, newTitle })
							.then((data) => {
								console.log('data:', data)
							})
							.catch((err) => {
								console.log('error occurred:', err)
							})
					})
				})
				.catch((err) => {
					console.log('error occurred:', err)
				})
		})
	}

	return { init }
})(Model, View)

AppController.init()
