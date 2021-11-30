const { createStore } = require('redux');

const INCREMENT = 'counter/incremented';
const DECREMENT = 'counter/decremented';
function counterReducer( state = { value: 100 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1};
        case DECREMENT:
            return { value: state.value - 1};
        default:
            return state;
    }
}

// Example
let mystore = mycreateStore(counterReducer);
mystore.dispatch({ type: INCREMENT });
const unsubscribe = mystore.subscribe(() => {
    console.log(mystore.getState());
})
mystore.dispatch({ type: INCREMENT });
unsubscribe();
mystore.dispatch({ type: DECREMENT });


function mycreateStore(reducer) {
    let subscriberFnList = [];
    let state;
    state = reducer(state, { type: '____INIT____'});
    
    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
        subscriberFnList.forEach((subscriberFn) => {
            subscriberFn();
        })
    }

    function subscribe(subscriberFn) {
        subscriberFnList.push(subscriberFn);
        return () => {
            subscriberFnList = subscriberFnList.filter(e => e !== subscriberFn);
        }
    }

    return {
        subscribe,
        dispatch,
        getState,
        subscriberFnList,
    };
}