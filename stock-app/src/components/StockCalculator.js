import React from "react";
// import { withBuyStockData } from "../hoc/withBuyStock";
// import { useBuyStock } from "../hooks/useBuyStock";
import store from "../redux/store";

const StockCalCulator = () => {
  const [currentStock, setCurrentStock] = React.useState(11);
  const [storeStock, setStoreStock] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setStoreStock(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section>
      <h1>How Many Stock do you have?</h1>
      <input
        type="number"
        onChange={(e) => setCurrentStock(+e.target.value)}
        value={currentStock}
      />
      <p>You have {currentStock + storeStock} stocks </p>
    </section>
  );
};

// const StockCalCulatorContainer = withBuyStockData(StockCalCulator);

export default StockCalCulator;
