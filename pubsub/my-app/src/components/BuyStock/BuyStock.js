import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'

export default function BuyStock(props) {
	const [count, setCount] = useState(0)
	useEffect(() => {
		PubSub.publishSync('count_from_buystock', count)
	}, [count])
	// useEffect(() => {
	// 	// componentDidMount
	// 	const token1 = PubSub.subscribe('counts', (msg, data) => {
	// 		console.log('h', data)
	// 		setCount(data)
	// 	})

	// 	//componentWillUnmount
	// 	return () => {
	// 		PubSub.unsubscribe(token1) //must unsubscribe
	// 	}
	// }, [])

	const handleAdd = () => {
		setCount(count + 1)
	}
	const handleSub = () => {
		setCount(count - 1 < 0 ? 0 : count - 1)
	}

	return (
		<section>
			<header>Buy</header>
			<h1>
				How Many Stock you want to buy!!
				<button onClick={handleAdd}>+</button>
				<span>{count}</span>
				<button onClick={handleSub}> -</button>
			</h1>
		</section>
	)
}
