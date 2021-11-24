import React, { useState } from 'react';

export const withBuyStockDataFc = (WrappedComponent) => {
    return () => {
        const [stockNum, setStockNum] = useState(0);

        const handleAdd = () => {
            setStockNum(stockNum + 1);
        };
        const handleSub = () => {
            setStockNum(stockNum - 1);
        };

        return (
            <WrappedComponent
                stockNum={stockNum}
                handleAdd={handleAdd}
                handleSub={handleSub}
            ></WrappedComponent>
        );
    }
};