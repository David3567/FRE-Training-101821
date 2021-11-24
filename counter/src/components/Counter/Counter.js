import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button/Button';

let data = {
  counter: 1000,
};
// UI = React (state)

const Counter = (props) => {
  const [appInfo, setAppInfo] = useState({
    title: 'counter',
    counter: 0,
    hideBtnAdd: false,
    keep: false,
  })

  const [keep, setKeep] = useState(false);
  const firstRun = useRef(true);

  useEffect(() => {
    console.log('Counter componentDidMount');
  }, [])

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return; //skip the first useEffect
    }
    const temp = appInfo.counter;
    setTimeout(() => {
      alert(temp); // HW2 alert the recent value using function component
    }, 5000);
  }, [keep])




  return (
    <section>
      {props.children}
      <header>Counter:{appInfo.counter}</header>
      <nav>{appInfo.title}</nav>
      {!appInfo.hideBtnAdd ? (
        <Button
          className="btn"
          onClick={() => {
            //HW1  why
            // Object.assign() is trigger, last one win setState will be implement
            setAppInfo((preState) => ({ counter: preState.counter + 1 }));
            setAppInfo((preState) => ({ counter: preState.counter + 1 }));
            setAppInfo((preState) => ({ counter: preState.counter + 1 }));
          }}
        >
          <h1>ADD</h1>
        </Button>
      ) : null}

      <Button
        onClick={() => {
          setAppInfo({ ...appInfo, hideBtnAdd: !appInfo.hideBtnAdd });
        }}
      >
        Remove/Show Btn Add
      </Button>
      <Button
        onClick={() => {
          setKeep(!keep);
        }}
      >
        Alert After 5s
      </Button>
    </section>
  );
}

export default Counter;