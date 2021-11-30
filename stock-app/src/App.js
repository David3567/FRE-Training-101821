import React from "react";
import BuyStock from "./components/BuyStock";
import StockCalCulator from "./components/StockCalculator";

class App extends React.Component {
  render() {
    return (
      <>
        <BuyStock />
        <StockCalCulator />
      </>
    );
  }
}

export default App;
