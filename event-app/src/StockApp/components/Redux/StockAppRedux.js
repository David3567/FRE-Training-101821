import { Provider } from 'react-redux';
import { createStore } from 'redux';

// actions
const UPDATE_MY_STOCKS = 'UPDATE_MY_STOCKS'
const updateMyStocks = (numStocks) => {
  return {
    type: UPDATE_MY_STOCKS,
    numStocks
  }
}

// reducers
const initialState = {myStocks: 10};
function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MY_STOCKS:
      return {
        myStocks: action.numStocks
      }
    default: return state;
  }
}

// store
const store = createStore(reducer)
// console.log(store.getState()) // successfully gets state

// dispatch

export default store;