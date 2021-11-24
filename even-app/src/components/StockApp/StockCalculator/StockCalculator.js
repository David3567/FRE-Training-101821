import React from 'react';
import { withBuyStockData } from '../../../hoc/withBuyStock';
//MVC vs  MVVM
//Data binding:
//from model to view : attrbute Or children JSX binding
//from view to model : event binding
//Controlled Component | UnControlled Component

class StockCalculator extends React.Component {
  state = {
    currentStock: 11,
  };

  render() {
    return (
      <section>
        <header>StockCalCulator</header>
        <h1
          onClick={(e) => {
            e.target.innerHTML = 'Changed';
            e.target.style.color = 'red';
          }}
        >
          How Many Stock do you have?
        </h1>
        <input
          type="number"
          onChange={(e) => this.setState({ currentStock: +e.target.value })}
          value={this.state.currentStock}
        />

        <h1>
          How Many Stock you want to buy
          <button onClick={this.props.handleAdd}>+</button>
          <span>{this.props.stockNum}</span>
          <button onClick={this.props.handleSub}> -</button>
        </h1>
        <p>You have {this.state.currentStock + this.props.stockNum} stock </p>
      </section>
    );
  }
}

const StockCalculatorContainer = withBuyStockData(StockCalculator);

export default StockCalculatorContainer;