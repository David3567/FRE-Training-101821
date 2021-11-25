import React from 'react';
import useStock from '../Hooks/useStockAddSub';
import { useDispatch  } from 'react-redux';

const BuyStockFn = () => {
  const [numStock, handleAdd, handleSub] = useStock(0);
  const dispatch = useDispatch();

  return (
  <section>
    <header>Buy</header>
    <h1>
      How Many Stock you want to buy
    </h1>
    <button onClick={handleAdd} style={{marginRight: '10px'}}>+</button>
    <span>{numStock}</span>
    <button onClick={handleSub} style={{marginLeft: '10px'}}>-</button><br/>
    <button onClick={() => { 
      const numStocks = numStock
      dispatch({type: 'UPDATE_MY_STOCKS', numStocks}) }
      }>
        Buy
    </button>
    {/* <button onClick={() => { dispatch({type: 'TEST'}) }}>Buy</button> */}
  </section>
  )
}

/*
import { withBuyStockData } from '../../hoc/withBuyStock';

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