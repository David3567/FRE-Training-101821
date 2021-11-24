import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import StockApp from "./components/StockApp/StockApp";
import StockAppFc from "./components/StockApp/StockAppFc";


ReactDOM.render(

  <StockAppFc />,

  document.getElementById('root')
);


