import React from 'react';
import Button from '../Button/Button';
import React, { useState } from 'react';

let data = {
  counter: 1000,
};
// UI = React (state)
function Counter (){
  const [title, setTitle] = useState('counter');
  const [counter, setCounter] = useState(0);
  const [hideBtnAdd, setHideBtnAdd] = useState(false);
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'counter',
//       counter: 0,
//       hideBtnAdd: false,
//     };
//   }
  const getDerivedStateFromProps=(props)=> {
    console.log('Counter getDerivedStateFromProps');
    if (props.title !== title) {
      //Change in props
      return setTitle(props.title);
    }
    return null; // No change to state
  }
    return (
      <section>
        {this.props.children}
        <header>Counter:{counter}</header>

        {!this.state.hideBtnAdd ? (
          <Button
            className="btn"
            onClick={() => {
              //HW1 SetState is an asynchronous method which means the main thread will keep running. Before the 
              // setstate update the this.state data, the second and third setstate method has already being triggered so
              // this.state.counter that the second and third method receved was remain the same as 0.
              // this.setState({ counter: this.state.counter + 1 });
              // this.setState({ counter: this.state.counter + 1 });
              // this.setState({ counter: this.state.counter + 1 });
              setCounter(counter+1);
              setCounter(counter+1);
              setCounter(counter+1);
            }}
          >
            <h1>ADD</h1>
          </Button>
        ) : null}

        <Button
          onClick={() => {
            // this.setState({ hideBtnAdd: !this.state.hideBtnAdd });
            setHideBtnAdd(!hideBtnAdd);
          }}
        >
          Remove/Show Btn Add
        </Button>
        <Button
          onClick={() => {
            setTimeout(() => {
              alert(counter); // HW2 alert the recent value using function component
            }, 5000);
          }}
        >
          Alert After 5s
        </Button>
      </section>
    );

  // componentDidMount() {
  //   console.log('Counter componentDidMount');
  // }
}

export default Counter;
