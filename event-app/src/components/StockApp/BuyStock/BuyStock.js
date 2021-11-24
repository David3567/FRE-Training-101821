import React from 'react';
import { withBuyStockData } from '../../../hoc/withBuyStock';

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

export default BuyStockContainer;