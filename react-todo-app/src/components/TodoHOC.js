import React from "react";
import Todo from "./Todo";

const TodoHOC = ( inputComponent, { filteredTodos, setTodos, todos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo) => (
					// <Todo
					// 	key={todo.id}
					// 	text={todo.text}
					// 	setTodos={setTodos}
					// 	todo={todo}
					// 	todos={todos}
					// />
					inputComponent(todo.text, todo, todos, setTodos)
				))}
			</ul>
		</div>
	);
};

export default TodoHOC;
