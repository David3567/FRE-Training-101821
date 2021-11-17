import React from "react";
import ReactDOM  from "react-dom";
import "./styles/style.css";


import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

const store = createStore(counter);

store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch({ type: 'INCREMENT' }) // => 1
store.dispatch({ type: 'INCREMENT' }) // => 2
store.dispatch({ type: 'DECREMENT' }) // => 1


ReactDOM.render(
    <h1>react and babel test!!!</h1>,
    document.querySelector(
      '#testjs'
    )
  );