import React, { useState } from 'react';
import BuyStock from './components/BuyStock/BuyStock';
import StockCalculator from './components/StockCalculator/StockCalculator';
import MyStock from './components/MyStock/MyStock';
import './StockAppStyle.css'

// ========================Fn Component=======================
const StockAppFn = () => {
  const [buyStock, setBuyStock] = useState(false);
  const [stockCalculator, setStockCalculator] = useState(false);
  const [myStocks, setMyStocks] = useState(true);

  const handleMyStockPage = (e) => {
    e.preventDefault();
    setMyStocks(true);
    setBuyStock(false);
    setStockCalculator(false);
  }

  const handleBuyStockPage = (e) => {
    e.preventDefault();
    setBuyStock(true);
    setMyStocks(false);
    setStockCalculator(false);
  }

  const handleStockCalculatorPage = (e) => {
    e.preventDefault();
    setBuyStock(false);
    setMyStocks(false);
    setStockCalculator(true); 
  }

  return (
    <div className='page'>
      <header>
        <a
          href="#"
          onClick={handleBuyStockPage}
          style={{ marginRight: '20px' }}
        >
          Buy Stock
        </a>

        <a href="#" onClick={handleMyStockPage} style={{ marginRight: '20px'}}>
          My Stock
        </a>
        <a href="#" onClick={handleStockCalculatorPage}>
          Stock Calculator
        </a>
      </header>
      {myStocks ? <MyStock /> : null} 
      {buyStock ? <BuyStock /> : null}
      {stockCalculator ? <StockCalculator /> : null}
    </div>
  );
}

/*
=================== Class Component =======================
class StockApp extends React.Component {
  state = {
    BuyStock: false,
    StockCalCulator: false,
  };

  hanldeBuyStockPage = (e) => {
    e.preventDefault();
    this.setState({ BuyStock: true, StockCalCulator: false });
  };
  hanldeStockCalCulatorPage = (e) => {
    e.preventDefault();

    this.setState({ BuyStock: false, StockCalCulator: true });
  };

  render() {
    return (
      <div>
        <header>
          <a
            href="#"
            onClick={this.hanldeBuyStockPage}
            style={{ marginRight: '20px' }}
          >
            BuyStock
          </a>
          <a href="#" onClick={this.hanldeStockCalCulatorPage}>
            StockCalCulator
          </a>
        </header>
        {this.state.BuyStock ? <BuyStock /> : null}
        {this.state.StockCalCulator ? <StockCalCulator /> : null}
      </div>
    );
  }
}
*/

export default StockAppFn;