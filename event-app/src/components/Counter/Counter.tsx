import React, { useState, useRef } from 'react';

import './Counter.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [hidden, toggleHidden] = useState(false);

  const addCounter = (increment: number) => setCounter(counter + increment);

  const toggleHide = () => toggleHidden(!hidden);

  // HW2:
  // Will show latest 'counter' value.
  // useRef() returns a mutable object that will persist for the full lifetime of the component. We take advantage of this by storing the current 'counter' value in useRef()'s '.current' property which will be read in setTimeout().
  const latestCounter = useRef(counter);
  latestCounter.current = counter;
  const showMostRecentValue = () => {
    setTimeout(() => {
      alert(latestCounter.current);
    }, 5000);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <button className="button" onClick={toggleHide}>
        {hidden ? 'Show Counter' : 'Hide Counter'}
      </button>
      {hidden ? null : (
        <button
          className="button"
          onClick={() => {
            // HW1: Explain setState()
            // React batches state updates in event handlers and will only re-render after event handlers have finished. setState() is also an async function and will merge the parameter object into the current state. The current state will then be overridden by the setState() to exit the update queue.
            addCounter(1);
            addCounter(1);
            addCounter(1);
          }}
        >
          Add Counter
        </button>
      )}
      <p>Counter: {counter}</p>
      <button onClick={showMostRecentValue} className="button">
        Show Latest Counter Value
      </button>
    </div>
  );
};

export default Counter;
