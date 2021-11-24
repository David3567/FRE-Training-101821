import React, { useState } from 'react'

export const withBuyStockData = (WrappedComponent) => {
	return function NewComponent() {
		const [count, setCount] = useState(0)
		const handleAdd = () => {
			setCount(count + 1)
		}
		const handleSub = () => {
			setCount(count - 1 < 0 ? 0 : count - 1)
		}

		return <WrappedComponent stockNum={count} handleAdd={handleAdd} handleSub={handleSub}></WrappedComponent>
	}
}
