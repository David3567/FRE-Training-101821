import React, { useState } from 'react';
import { withBuyStockDataFc } from "../../../hoc/withBuyStockFc";

const StockCalculator = (props) => {

    const [currentStock, setCurrentStock] = useState(11);

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
                onChange={(e) => setCurrentStock(currentStock + e.target.value)}
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

const StockCalculatorContainer = withBuyStockDataFc(StockCalculator);

export default StockCalculatorContainer;