import React, { useState } from "react";
import Button from "./Button";

const CounterFC = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setTimeout(() => {
			alert(count);
		}, 3000);
	};
	return (
    //HW1: When you click "show value" after clicking the add button, it will not be up to date because state is updated asynchronously. 
    //This is because we have two different buttons and the state is not synced. It will only update when the component gets  unmounted 
    //and re-rendered.
		<section>
			<header>Counter: {count}</header>
			<Button onClick={() => setCount(count + 1)}>Add</Button>
			<Button onClick={handleClick}>
				Show value
			</Button>
		</section>
	);
};

export default CounterFC;
