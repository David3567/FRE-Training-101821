import React, { useState, useEffect } from 'react'
import store from '../../redux/store'

export const withBuyStockData = (WrappedComponent) => {
	return function NewComponent() {
		const handleAdd = () => {
			store.dispatch({ type: 'increment', data: +1 })
		}
		const handleSub = () => {
			// setCount(count - 1 < 0 ? 0 : count - 1)
			const count = store.getState()
			if (count > 1) store.dispatch({ type: 'decrement', data: +1 })
		}

		return <WrappedComponent stockNum={store.getState()} handleAdd={handleAdd} handleSub={handleSub}></WrappedComponent>
	}
}
