import React, { useState, useEffect } from "react";
import Button from '../Button/Button';
import FuncButton from '../Button/FuncButton';

export default function Counter(props) {

    const [state, setState] = useState({
        title: 'counter',
        counter: 0,
        hideBtnAdd: false,
      })

      useEffect(() => {
        console.log(state)
      }, [state]);

      useEffect(() => {
        console.log('mounted')
      }, []);


  return (
    <div>
      <header>Counter:{state.counter}</header>

      {!state.hideBtnAdd ? (
          <Button
            className="btn"
            onClick={() => {
              //HW1  why
              //changes to state happen only once at end of event
              setState({ ...state , counter: state.counter + 1});
              setState({ ...state , counter: state.counter + 1});
              setState({ ...state , counter: state.counter + 1});
              
            }}
          >
            <h1>ADD</h1>
          </Button>
        ) : null}

        <Button
          onClick={() => {
            setState({ ...state, hideBtnAdd: !state.hideBtnAdd });
          }}
        >
          Remove/Show Btn Add
        </Button>
        <Button
          onClick={() => {
            setTimeout(() => {
              alert(state.counter);
            }, 5000);
          }}
        >
          Alert After 5s
        </Button>
    </div>
  );
}