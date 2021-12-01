// const { createStore } = require('redux');

function counterReducer(state = { value: 100 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function mycreateStore(reducer) {
  let subscriberFnList = [];
  let state;
  state = reducer(state, { type: '_______INIT_______' });
  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    subscriberFnList.forEach((subscriberFn) => {
      console.log('call subscriber');
      subscriberFn();
    });
  }

  function subscribe(subscriberFn) {
    subscriberFnList.push(subscriberFn);
  }

  function unsubscribe(subscriberFn) {
    const index = subscriberFnList.indexOf(subscriberFn);
    if (index > -1) {
      subscriberFnList.splice(index, 1);
    }
  }

  return {
    subscribe,
    unsubscribe,
    dispatch,
    getState
  };
}
