import React from 'react';
import ReactDOM from 'react-dom';

import MyReactDOM from './MyReact/MyReactDOM';

const element = (
  <section className="app-counter">
    <header>
      <h1>Counter: 0</h1>
    </header>
    <button className="btn" onClick={() => alert('add')}>
      Add
    </button>
  </section>
);
// console.log(element);
//ReactDOM.render(element, document.getElementById('root'));

const myElement = {
  type: 'section',
  props: {
    children: [
      {
        type: 'header',
        props: {
          children: {
            type: 'h1',
            props: {
              children: 'Counter: 0',
            },
          },
        },
      },
      {
        type: 'button',
        props: {
          children: 'Add',
          className: 'btn',
          onClick: () => alert('add'),
        },
      },
    ],
    className: 'app-counter',
  },
};

MyReactDOM.render(myElement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
