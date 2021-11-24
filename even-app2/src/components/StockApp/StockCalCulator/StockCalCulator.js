import React from 'react';
import { withBuyStockData } from '../../../hoc/withBuyStock';
//MVC vs  MVVM
//Data binding:
//from model to view : attrbute Or children JSX binding
//from view to model : event binding
//Controlled Component | UnControlled Component

export const StockCalCulator = (props) => {

  const [currentStock, setCurrentStock] = React.useState(11);


  /*
  //get the updated value
  const currentStockRef = React.useRef(currentStock);
  currentStockRef.current = currentStock; 
  */

  
  const update_stock = (event) => {
  
    setCurrentStock(+event.target.value);
  }

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
        onChange={(e) => update_stock(e)}
        value={currentStock}
      />

      <h1>
        How Many Stock you want to buy
        <button onClick={props.handleAdd}>+</button>
        <span>{props.stockNum}</span>
        <button onClick={props.handleSub}> -</button>
      </h1>
      <p>You have {currentStock + props.stockNum} stock </p>
    </section>
  );
}


/*

class StockCalCulator extends React.Component {
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

*/
const StockCalCulatorContainer = withBuyStockData(StockCalCulator);

export default StockCalCulatorContainer;
