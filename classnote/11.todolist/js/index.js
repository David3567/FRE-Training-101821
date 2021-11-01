const Model = (() => {
	const fetchTodos = () => {
		return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
	}

	const createTodos = (todo) => {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'foo',
				body: 'bar',
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json))
	}

	return { fetchTodos } //same as { fetchTodos: fetchTodos }
})()

const View = (() => {
	const domString = { todoListContainer: '.todolist-wrapper', todoListContent: '.todolist__content', todoListAdd: '.btn-add', todoListInput: '.todolist__header-input' }
	const render = (template, element) => {
		element.innerHTML = template
	}

	const generateTodoItem = (todo) => {
		const title = todo.title.length > 30 ? todo.title.substring(0, 30) + '...' : todo.title
		return `<li class="todolist__row todolist__content-item"><span class="todolist__content-item-title">${title}</span> <button class="btn">Delete</button></li>`
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
		setUpevent()
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
	}

	const fetchData = () => {
		model.fetchTodos().then((data) => {
			//model.fetchTodos() return promise
			//console.log(data) //array
			todolistdata = data
			updateTodoListItems(todolistdata)
		})
	}
	const setUpevent = () => {
		const btnAdd = document.querySelector(view.domString.todoListAdd)
		const todolistInput = document.querySelector(view.domString.todoListInput)
		btnAdd.addEventListener('click', () => {
			alert(todolistInput.value)
		})
	}

	return { init }
})(Model, View)

AppController.init()
