import { createStore } from 'redux';

// actions
const UPDATE_MY_STOCKS = 'UPDATE_MY_STOCKS'
// const updateMyStocks = (numStocks) => {
//   return {
//     type: UPDATE_MY_STOCKS,
//     numStocks
//   }
// }

// reducers
const initialState = {myStocks: 10};
function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MY_STOCKS:
        // console.log('hit and the action.numStocks', action.numStocks);
      return {
        myStocks: state.myStocks + action.numStocks
      }
    case 'TEST':
        console.log('test');
        return {
            myStocks: state.myStocks + 1
        }
    default: return state;
  }
}

// store
const store = createStore(reducer)
// console.log(store.getState()) // successfully gets state

// dispatch
export default store;

// MyStock 폴더랑 Redux 폴더랑 같이 components 폴더에 들어가있어요
