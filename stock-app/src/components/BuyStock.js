import React from "react";
// import { withBuyStockData } from "../hoc/withBuyStock";
import { useBuyStock } from "../hooks/useBuyStock";

const BuyStock = () => {
  const [stockNum, handleAdd, handleSub] = useBuyStock(0);

  return (
    <section>
      <h1>
        How Many Stock you want to buy!!!!!
        <button onClick={handleAdd}>+</button>
        <span>{stockNum}</span>
        <button onClick={handleSub}> -</button>
      </h1>
    </section>
  );
};

// const BuyStockContainer = withBuyStockData(BuyStock);

export default BuyStock;
