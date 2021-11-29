import React from 'react'
import BuyStock from './BuyStock/BuyStock'
import StockCalCulator from './StockCalCulator/StockCalCulator'
import MyContext from '../context/context'

class StockApp extends React.Component {
	state = {
		BuyStock: false,
		StockCalCulator: false,
	}

	hanldeBuyStockPage = (e) => {
		e.preventDefault()
		this.setState({ BuyStock: true, StockCalCulator: false })
	}
	hanldeStockCalCulatorPage = (e) => {
		e.preventDefault()

		this.setState({ BuyStock: false, StockCalCulator: true })
	}

	render() {
		return (
			<MyContext.Provider value='1'>
				<header>
					<a href='#' onClick={this.hanldeBuyStockPage} style={{ marginRight: '20px' }}>
						BuyStock
					</a>
					<a href='#' onClick={this.hanldeStockCalCulatorPage}>
						StockCalCulator
					</a>
				</header>
				{this.state.BuyStock ? <BuyStock /> : null}
				{this.state.StockCalCulator ? <StockCalCulator /> : null}
			</MyContext.Provider>
		)
	}
}

export default StockApp
