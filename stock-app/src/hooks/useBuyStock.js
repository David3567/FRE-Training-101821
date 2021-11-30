import React from "react";
import store from "../redux/store";

export const useBuyStock = (initStock) => {
  const [stockNum, setStockNum] = React.useState(initStock);
  const hanldeAdd = () => {
    setStockNum(stockNum + 1);
    store.dispatch({ type: "add" });
  };
  const hanldeSub = () => {
    setStockNum(stockNum - 1);
    store.dispatch({ type: "sub" });
  };
  return [stockNum, hanldeAdd, hanldeSub];
};
