import React from 'react';
import { withBuyStockDataFc } from '../../../hoc/withBuyStockFc';

const BuyStock = (props) => {
    return (
        <section>
            <header>Buy</header>
            <h1>
                How Many Stock you want to buy!!!!!
                <button onClick={props.handleAdd}>+</button>
                <span>{props.stockNum}</span>
                <button onClick={props.handleSub}> -</button>
            </h1>
        </section>
    );

}

const BuyStockContainer = withBuyStockDataFc(BuyStock);

export default BuyStockContainer;