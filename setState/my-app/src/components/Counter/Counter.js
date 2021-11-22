import React, { useState, useRef } from 'react'
import Button from '../Button/Button'

const Counter = (props) => {
	let [counter, setCounter] = useState(0)
	let [hideBtnAdd, setHideBtnAdd] = useState(false)
	const stateRef = useRef()
	stateRef.current = counter
	return (
		<section>
			{props.children}
			<header>Counter:{counter}</header>

			{hideBtnAdd ? (
				<Button
					className='btn'
					onClick={() => {
						//HW1  why
                        //The this.state object is updated when we re-render the UI at the end of the batch. 
                        //So if you need to update state based on a previous state (such as incrementing a counter),
                        //you should use the functional setState(fn) version that gives you the previous state, 
                        //instead of reading from this.state
						setCounter(counter + 1)
					}}
				>
					<h1>ADD</h1>
				</Button>
			) : null}

			<Button
				onClick={() => {
					setHideBtnAdd(!hideBtnAdd)
				}}
			>
				Remove/Show Btn Add
			</Button>
			<Button
				onClick={() => {
					setTimeout(() => {
						console.log(counter)
						alert(stateRef.current) // HW2 alert the recent value using function component
					}, 5000)
				}}
			>
				Alert After 5s
			</Button>
		</section>
	)
}

export default Counter
