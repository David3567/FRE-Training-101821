import React, { useState, useEffect } from "react";
import Button from '../Button/Button';


const Counter = (props) => {

    const [state, setState] = useState({
        title: 'counter',
        counter: 0,
        hideBtnAdd: false,
      })

      useEffect(() => {
        console.log('Counter componentDidMount')
      }, []);

      useEffect(() => {
        console.log(state)
      }, [state]);


  return (
    <div>
      <header>Counter:{state.counter}</header>

      {!state.hideBtnAdd ? (
          <Button
            className="btn"
            onClick={() => {
              //HW1, setState
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
              alert(state.counter); // HW2
            }, 5000);
          }}
        >
          Alert After 5s
        </Button>
    </div>
  );
}

export default Counter;