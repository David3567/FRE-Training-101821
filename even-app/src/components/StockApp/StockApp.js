import React from 'react';
import BuyStock from './BuyStock/BuyStock';
import StockCalculator from './StockCalculator/StockCalculator';

class StockApp extends React.Component {
  state = {
    BuyStock: false,
    StockCalCulator: false,
  };

  hanldeBuyStockPage = (e) => {
    e.preventDefault();
    this.setState({ BuyStock: true, StockCalculator: false });
  };
  hanldeStockCalCulatorPage = (e) => {
    e.preventDefault();

    this.setState({ BuyStock: false, StockcalCulator: true });
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
          <a href="#" onClick={this.hanldeStockCalculatorPage}>
            StockCalCulator
          </a>
        </header>
        {this.state.BuyStock ? <BuyStock /> : null}
        {this.state.StockCalculator ? <StockCalculator /> : null}
      </div>
    );
  }
}

export default StockApp;