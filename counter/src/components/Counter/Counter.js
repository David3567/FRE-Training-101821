import React, { useEffect, useState, useRef } from "react";
import Button from "../Button/Button";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const [hideBtnAdd, setHideBtnAdd] = useState(false);

  // =========== HW 2 alert the recent value using function component ===========
  // alert with reference
  const counterRef = useRef(0);

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  const handleTimeout = () => {
    setTimeout(() => {
      alert(counterRef.current);
    }, 5000);
  };
  // =================================== HW 2 ===================================

  const handleButton = () => {
    setHideBtnAdd(!hideBtnAdd);
  };

  return (
    <section>
      {props.children}
      <header>Counter:{counter}</header>

      {!hideBtnAdd && (
        <Button
          className="btn"
          onClick={() => {
            // HW 1 why
            // since setState is asynchronous, change will not take action right away
            // counter will still reflect to it's original value
            // but if passing the previous value and return the updated value
            // we can get access to previous return value in the next call
            // which chain the calls together
            setCounter((prev) => prev + 1);
            setCounter((prev) => prev + 1);
            setCounter((prev) => prev + 1);
          }}
        >
          <h1>ADD</h1>
        </Button>
      )}

      <Button onClick={handleButton}>Remove/Show Btn Add</Button>
      <Button onClick={handleTimeout}>Alert After 5s</Button>
    </section>
  );
};

export default Counter;
