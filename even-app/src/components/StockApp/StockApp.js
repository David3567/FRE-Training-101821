import React from 'react';
import BuyStock from './BuyStock/BuyStock';
import StockCalCulator from './StockCalCulator/StockCalCulator';
import '../../context/BuyStock.context';
import { BuyStockPrvider } from '../../context/BuyStock.context';
import Button from '../Button/Button';
import { Route, Link } from 'react-router-dom';
import { MyRoute, MyLink } from '../../MyReactRouter/MyReactRouter';

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
          <MyLink to="/buy">BuyStock</MyLink>
          <MyLink to="/calculator">StockCalCulator</MyLink>
          <Button>Test</Button>
        </header>
        <Route exact path="/buy">
          <BuyStock />
        </Route>
        <Route exact path="/calculator">
          <StockCalCulator />
        </Route>
      </BuyStockPrvider>
    );
  }
}

export default StockApp;
