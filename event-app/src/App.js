import { useState } from 'react';
import './App.css';
import $ from 'jquery'

function App() {
  let [counter, setCounter] = useState(0);

  const click = () => {
    console.log('clicked');
    setCounter(counter => counter + 1);
  }

  const hide = () => {
    $('.addBtn').toggle();
  }

  const alarm = () => {

    setTimeout (() => {

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
  );
}

export default App;
