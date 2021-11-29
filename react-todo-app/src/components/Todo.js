import React from "react";

const Todo = (text, todo, todos, setTodoFn) => {
	const deleteHandler = () => {
		setTodoFn(todos.filter((item) => item.id !== todo.id));
	};
	const completeHandler = () => {
		setTodoFn(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{text}
			</li>
			<button className="complete-btn" onClick={completeHandler}>
				<i className="fas fa-check"></i>
			</button>
			<button className="trash-btn" onClick={deleteHandler}>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default Todo;
