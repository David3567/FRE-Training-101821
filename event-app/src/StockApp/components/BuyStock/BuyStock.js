import React from 'react';
import { withBuyStockData } from '../../hoc/withBuyStock';
import useStock from '../Hooks/useStockAddSub';

const BuyStockFn = () => {
  const [numStock, handleAdd, handleSub] = useStock(4);

  return (
  <section>
    <header>Buy</header>
    <h1>
      How Many Stock you want to buy!!!!!
      <button onClick={handleAdd}>+</button>
      <span>{numStock}</span>
      <button onClick={handleSub}> -</button>
    </h1>
  </section>
  )
}

/*
class BuyStock extends React.Component {
  render() {
    return (
      <section>
        <header>Buy</header>
        <h1>
          How Many Stock you want to buy!!!!!
          <button onClick={this.props.handleAdd}>+</button>
          <span>{this.props.stockNum}</span>
          <button onClick={this.props.handleSub}> -</button>
        </h1>
      </section>
    );
  }
}

const BuyStockContainer = withBuyStockData(BuyStock);
*/

export default BuyStockFn;