import React, { useState, useContext } from 'react'
import MyContext from '../../context/context'

export const withBuyStockData = (WrappedComponent) => {
	return function NewComponent() {
		const value = useContext(MyContext)
		const [count, setCount] = useState(+value)
		const handleAdd = () => {
			setCount(count + 1)
		}
		const handleSub = () => {
			setCount(count - 1 < 0 ? 0 : count - 1)
		}

		return <WrappedComponent stockNum={count} handleAdd={handleAdd} handleSub={handleSub}></WrappedComponent>
	}
}
