import React, { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((precount) => precount + 1);
  };

  const decrement = () => {
    setCount((precount) => precount - 1);
  };

  /*
    const reset = () => {
        setCount(0);
    }
    */
  return [count, increment, decrement];
}

export default useCounter;
