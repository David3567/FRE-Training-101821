import React,{useState, useRef} from 'react';
import Button from '../Button/Button';




const Counter = () => {


  const [count, setCount] = useState(1000);
  const [hideBtnAdd, setHide] = useState(false); 

  const countRef = useRef(count);
  countRef.current = count;
//update the counter
  const increment = () => {
    //using the previous count
    setCount((preCount) => preCount + 1);
  }


  const hidebtn = () => {
    setHide((preHide) => !preHide);
  }

  return (
    <section>
     
      <header>{count}</header>

      {!hideBtnAdd ? (
        <Button
          className="btn"
          onClick={
            increment

            /*
            //HW1  why? ->  setState() is asynchronous, multiple calls during the 
            same cycle may be batched together and executed at one go later. this will
            override values from pervious subsequent calls in the same cycle. thus, 
            it has the same result as called once. 
            this.setState({ counter: this.state.counter + 1 });
            this.setState({ counter: this.state.counter + 1 });
            this.setState({ counter: this.state.counter + 1 });

            */
          }
        >
          <h1>ADD</h1>
        </Button>
      ) : null}

      <Button
        onClick={hidebtn}
      >
        Remove/Show Btn Add
      </Button>
      <Button
        onClick={() => {
          setTimeout(() => {
            alert(countRef.current); // HW2 alert the recent value using function component
          }, 5000);
        }}
      >
        Alert After 5s
      </Button>
    </section>
  );

}

/*

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
        <header>Counter:{this.state.counter}</header>

        {!this.state.hideBtnAdd ? (
          <Button
            className="btn"
            onClick={() => {
              //HW1  why
              this.setState({ counter: this.state.counter + 1 });
              this.setState({ counter: this.state.counter + 1 });
              this.setState({ counter: this.state.counter + 1 });
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
            setTimeout(() => {
              alert(this.state.counter); // HW2 alert the recent value using function component
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


*/

export default Counter;
