const Model = (() => {
	const a = 5
	const fetchTodos = () => {
		return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
	}
	return { fetchTodos, a } //same as { fetchTodos: fetchTodos }
})()

console.log(Model.a)
