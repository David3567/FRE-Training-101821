import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'

//MVC vs  MVVM
//Data binding:
//from model to view : attrbute Or children JSX binding
//from view to model : event binding
//Controlled Component | UnControlled Component

export default function StockCalCulator(props) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		// componentDidMount
		const token1 = PubSub.subscribe('count_from_buystock', (msg, data) => {
			console.log('count_from_buystock', data)
			setCount(data)
		})

		//componentWillUnmount
		return () => {
			PubSub.unsubscribe(token1) //must unsubscribe
		}
	}, [])

	const [currentStock, setCurrentStock] = useState(0)

	const handleAdd = () => {
		setCount(count + 1)
	}
	const handleSub = () => {
		setCount(count - 1 < 0 ? 0 : count - 1)
	}

	return (
		<section>
			<header>StockCalCulator</header>
			<h1
				onClick={(e) => {
					e.target.innerHTML = 'Changed'
					e.target.style.color = 'red'
				}}
			>
				How Many Stock do you have?
			</h1>
			<input type='number' onChange={(e) => setCurrentStock(+e.target.value)} value={currentStock} />

			<h1>
				How Many Stock you want to buy
				<button onClick={handleAdd}>+</button>
				<span>{count}</span>
				<button onClick={handleSub}> -</button>
			</h1>
			<p>You have {currentStock + count} stock </p>
		</section>
	)
}
