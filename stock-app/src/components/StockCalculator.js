import React from "react";
// import { withBuyStockData } from "../hoc/withBuyStock";
import { useBuyStock } from "../hooks/useBuyStock";

const StockCalCulator = (props) => {
  const [currentStock, setCurrentStock] = React.useState(11);
  const [stockNum, handleAdd, handleSub] = useBuyStock(0);

  return (
    <section>
      <h1>How Many Stock do you have?</h1>
      <input
        type="number"
        onChange={(e) => setCurrentStock(+e.target.value)}
        value={currentStock}
      />
      <p>You have {currentStock + stockNum} stocks </p>
    </section>
  );
};

// const StockCalCulatorContainer = withBuyStockData(StockCalCulator);

export default StockCalCulator;
