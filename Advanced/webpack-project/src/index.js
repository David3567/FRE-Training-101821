import React from 'react';
import ReactDOM from 'react-dom';
import "../css/style.scss";

import App from './App';

const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

// module.hot.accept();