import React from 'react';
import BuyStock from './BuyStock/BuyStock';
import StockCalCulator from './StockCalCulator/StockCalCulator';
import '../../context/BuyStock.context';
import { BuyStockPrvider } from '../../context/BuyStock.context';
import Button from '../Button/Button';

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
      <BuyStockPrvider>
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
          <Button>Test</Button>
        </header>
        {this.state.BuyStock ? <BuyStock title="BuyStock" /> : null}
        {this.state.StockCalCulator ? <StockCalCulator /> : null}
      </BuyStockPrvider>
    );
  }
}

export default StockApp;
