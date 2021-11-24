import React from 'react';
import Button from '../Button/Button';

let data = {
  counter: 1000,
};
// UI = React (state)

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'counter',
      counter: 0,
      hideBtnAdd: false,
    };

    console.log('Counter constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Counter getDerivedStateFromProps');
    if (props.title !== state.title) {
      //Change in props
      return {
        title: props.title,
      };
    }
    return null; // No change to state
  }
  render() {
    console.log('Counter render');

    return (
      <section>
        {this.props.children}
        <header>
          {this.state.title}:{this.state.counter}
        </header>

        {!this.state.hideBtnAdd ? (
          <Button
            className="btn"
            onClick={() => {
              //HW1  why
              this.setState((preState) => ({
                counter: preState.counter + 1,
              }));
              this.setState((preState) => ({
                counter: preState.counter + 1,
              }));
              this.setState((preState) => ({
                counter: preState.counter + 1,
              }));
            }}
          >
            <h1>ADD</h1>
          </Button>
        ) : null}

        <Button
          onClick={() => {
            this.setState({ hideBtnAdd: !this.state.hideBtnAdd });
          }}
        >
          Remove/Show Btn Add
        </Button>
        <Button
          onClick={() => {
            let currentCouter = this.state.counter;
            setTimeout(() => {
              alert(currentCouter); // HW2 alert the recent value using function component
            }, 5000);
          }}
        >
          Alert After 5s
        </Button>
      </section>
    );
  }

  componentDidMount() {
    console.log('Counter componentDidMount');
  }
}

let alertCounter;
export const CounterFn = (props) => {
  const [counter, setCounter] = React.useState(10);
  const [hideBtnAdd, setHideBtnAdd] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const counterRef = React.useRef(counter);
  counterRef.current = counter;

  React.useEffect(() => {
    if (showAlert === true) {
      alert(counter);
      setShowAlert(false);
    }
  }, [showAlert]);

  // ComponentDidMount
  // React.useEffect(() => {
  //   console.log('useEffect invoked');
  // }, []);

  // ComponentDidUpdate + ComponentDidMount
  // React.useEffect(() => {
  //   console.log('useEffect invoked');
  // });

  // React.useEffect(() => {
  //   return () => {
  //     // ComponentWillUnmount
  //   };
  // }, [XXX]);

  return (
    <section>
      {props.children}
      <header>
        {props.title}:{counter}
      </header>

      {!hideBtnAdd ? (
        <Button
          className="btn"
          onClick={() => {
            setCounter(counter + 1);
            setCounter(counter + 1);
            setCounter(counter + 1);
          }}
        >
          <h1>ADD</h1>
        </Button>
      ) : null}

      <Button
        onClick={() => {
          setHideBtnAdd(!hideBtnAdd);
        }}
      >
        Remove/Show Btn Add
      </Button>
      <Button
        onClick={() => {
          setTimeout(() => {
            setShowAlert(true); // HW2 alert the recent value using function component
          }, 5000);
        }}
      >
        Alert After 5s
      </Button>
    </section>
  );
};

export default Counter;
