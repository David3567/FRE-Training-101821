import React, { useState } from 'react';
import { withBuyStockData } from '../../hoc/withBuyStock';
import useStockAddSub from '../Hooks/useStockAddSub';
//MVC vs  MVVM
//Data binding:
//from model to view : attrbute Or children JSX binding
//from view to model : event binding
//Controlled Component | UnControlled Component

const StockCalculatorFn = () => {
  const [currStock, setCurrStock] = useState(1);
  const [numStock, handleAdd, handleSub] = useStockAddSub(currStock);

  const handleInputStock = (e) => {
    setCurrStock(currStock => currStock + Number(e.target.value));
    console.log('currStock type is', typeof currStock, 'and value is', currStock)
  }
  return (
    <section>
      <header>Stock Calculator</header>
      <h1>
        How Many Stock do you have?
      </h1>
      <input
        type="number"
        onChange={handleInputStock}
        value={currStock}
      />

      <h1>
        How Many Stock you want to buy
        <button onClick={handleAdd}>+</button>
        <span>{numStock}</span>
        <button onClick={handleSub}> -</button>
      </h1>
      <p>You have {currStock + numStock} stock </p>
    </section>
  )
}

/*
class StockCalculator extends React.Component {
  state = {
    currentStock: 11,
  };

  render() {
    return (
      <section>
        <header>Stock Calculator</header>
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
*/

export default StockCalculatorFn;