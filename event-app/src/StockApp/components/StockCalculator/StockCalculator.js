// import React, { useState } from 'react';
import useStockAddSub from '../Hooks/useStockAddSub';
import { useSelector } from 'react-redux';

//MVC vs  MVVM
//Data binding:
//from model to view : attrbute Or children JSX binding
//from view to model : event binding
//Controlled Component | UnControlled Component

const StockCalculatorFn = () => {
  // const [currStock, setCurrStock] = useState(1);
  const [numStock, handleAdd, handleSub] = useStockAddSub(1);

  const states = useSelector((state) => state);

  // const handleInputStock = (e) => {
  //   setCurrStock(currStock => currStock + Number(e.target.value));
  //   console.log('currStock type is', typeof currStock, 'and value is', currStock)
  // }
  return (
    <section>
      <header>Stock Calculator</header>
      <h1>
        How Many Stock do you have?
      </h1>
      {/* <input type="number" onChange={hanldeCurrentStock} value={currentStock} /> */}
      <p>Your current number of stocks is {states.myStocks}</p>

      <h1>
        How Many Stock you want to buy
      </h1>
      
      <button onClick={handleAdd} style={{marginRight: '10px'}}>+</button>
      <span>{numStock}</span>
      <button onClick={handleSub} style={{marginLeft: '10px'}}>-</button>

      <p>You would have {states.myStocks + numStock} stocks </p>
    </section>
  )
}

/*
import { withBuyStockData } from '../../hoc/withBuyStock';

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