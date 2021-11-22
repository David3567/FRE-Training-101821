import React, { useState } from 'react'
import $ from 'jquery';

const Counter = () => {

  let [counter, setCounter] = useState(0);

  const click = () => {
    console.log('clicked');
    setCounter(counter => counter + 1);
  }

  const hide = () => {
    $('.addBtn').toggle();
  }

  const alarm = () => {
    setTimeout(() => {
      alert(counter)
    }, 5000)
  }
  return (
    <div className="App">
      <div>{counter}</div>
      <button className="addBtn" onClick={click}>Add</button>
      <button classNAme="hideAddBtn" onClick={hide}>Hide Add Button</button>
      <button className="alertBtn" onClick={alarm}>Alert</button>
    </div>
  )
}

export default Counter;

/*
setState explanation

setState() is a built in method provided by react so that we can update the state
without directly mutating the state which is not the correct way.

In the example setState() call, we passed in an object with a property counter
and the value of the current counter state and incremented it.
{ counter: this.state.counter + 1 }

When setState() is called, the state is updated as long as the state itself is
not directly mutated. Since the state is changed, the app will trigger a re-render.

The class and all of it's children will be re-rendered based on the new state.
Any following react component lifecycle methods will be called in order but in
this instance, only the counter number on the app will be changed.
*/
