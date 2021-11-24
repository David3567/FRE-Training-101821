import React from 'react';
import { withBuyStockData } from '../../../hoc/withBuyStock';
import WithBuyStock from '../../../renderProps/WithBuyStock.js';
import { useBuyStock } from '../../../hooks/useBuyStock';
// let state;
// function setData(data) {
//   state = data;
// }

// let onClick = function () {
//   setData(1);
// };

const BuyStockFn = (props) => {
  const [stockNum, hanldeAdd, hanldeSub] = useBuyStock(10);
  return (
    <section>
      <header>{props.title}</header>
      <h1>
        How Many Stock you want to buy!!!!!
        <button onClick={hanldeAdd}>+</button>
        <span>{stockNum}</span>
        <button onClick={hanldeSub}>-</button>
      </h1>
    </section>
  );
};

class BuyStock extends React.Component {
  render() {
    return (
      <section>
        <header>{this.props.title}</header>
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

const BuyStockContainer = withBuyStockData(BuyStockFn);

// <WithBuyStock></WithBuyStock>  VS  WithBuyStock
// console.log('<WithBuyStock>', <WithBuyStock>{() => {}}</WithBuyStock>);
// console.log('WithBuyStock', WithBuyStock);

// const BuyStockContainer = () => (
//   <WithBuyStock>
//     {(stockNum, handleAdd, hanldeSub) => {
//       return (
//         <BuyStock
//           stockNum={stockNum}
//           handleAdd={handleAdd}
//           handleSub={hanldeSub}
//         ></BuyStock>
//       );
//     }}
//   </WithBuyStock>
// );

export default BuyStockFn;
