import React from 'react';
import BuyStock from './BuyStock/BuyStock';
import StockCalCulator from './StockCalCulator/StockCalCulator';

/*

export const StockApp = () => {
const [BuyStock, setBuyStock] = React.useState(false);
const [StockCalCulator, setStockCalculator] = React.useState(false);

const hanldeBuyStockPage = (e) => {
  e.preventDefault();
  setBuyStock(true);
  setStockCalculator(false);
};
const hanldeStockCalCulatorPage = (e) => {
  e.preventDefault();
  setBuyStock(false);
  setStockCalculator(true);

  
};



  return (
    <div>
      <header>
        <a
          href="#"
          onClick={hanldeBuyStockPage}
          style={{ marginRight: '20px' }}
        >
          BuyStock
        </a>
        <a href="#" onClick={hanldeStockCalCulatorPage}>
          StockCalCulator
        </a>
      </header>
      {BuyStock ? <BuyStock /> : null}
      {StockCalCulator ? <StockCalCulator /> : null}
    </div>
  );
}

*/



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




export default StockApp;
