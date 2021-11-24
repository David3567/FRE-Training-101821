import React, { useState } from 'react'
import { withBuyStockData } from '../hoc/withBuyStock'
//MVC vs  MVVM
//Data binding:
//from model to view : attrbute Or children JSX binding
//from view to model : event binding
//Controlled Component | UnControlled Component

function StockCalCulator(props) {
	const [currentStock, setCurrentStock] = useState(0)

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
			<input type='number' onChange={(e) => setCurrentStock( +e.target.value)} value={currentStock} />

			<h1>
				How Many Stock you want to buy
				<button onClick={props.handleAdd}>+</button>
				<span>{props.stockNum}</span>
				<button onClick={props.handleSub}> -</button>
			</h1>
			<p>You have {currentStock + props.stockNum} stock </p>
		</section>
	)
}

const StockCalCulatorContainer = withBuyStockData(StockCalCulator)

export default StockCalCulatorContainer
