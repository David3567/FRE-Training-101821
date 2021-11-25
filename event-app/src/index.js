import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import StockApp from './StockApp/StockApp';
import reportWebVitals from './reportWebVitals';
import store from './StockApp/components/Redux/StockAppRedux'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StockApp />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
