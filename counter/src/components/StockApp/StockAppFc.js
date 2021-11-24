import React, { useState } from 'react';
import BuyStockFc from './BuyStock/BuyStockFc';
import StockCalculatorFc from './StockCalculator/StockCalculatorFc';

const StockApp = (props) => {
    const [buyStock, setBuyStock] = useState(false);
    const [stockCalculator, setStockCalculator] = useState(false);


    const hanldeBuyStockPage = (e) => {
        e.preventDefault();
        setBuyStock(true);
        setStockCalculator(false);
    };
    const hanldeStockCalculatorPage = (e) => {
        e.preventDefault();
        setBuyStock(false);
        setStockCalculator(true);
    };

    return (
        <div>
            <header>
                <a
                    href="#"
                    onClick={hanldeBuyStockPage}
                    style={{ marginRight: '20px' }}
                >
                    BuyStock
                </a>
                <a href="#" onClick={hanldeStockCalculatorPage}>
                    StockCalCulator
                </a>
            </header>
            {buyStock ? <BuyStockFc /> : null}
            {stockCalculator ? <StockCalculatorFc /> : null}
        </div>
    );

}

export default StockApp;