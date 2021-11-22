import React, {useState } from 'react'
import $ from 'jquery';

// HW 2 - Rebuild Counter
const Counter = () => {

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
    )
}

export default Counter;

/*
    HW 1 - Explain setState()
    
    State can be updated in response to event handlers, server reponse, or prop changes.
    This is done using the setState(). It enqueues all of the updates made to the component state
    and calls render() on the component and its children with the updated state.

    By enqueueing `this.setState({ counter: this.state.counter + 1})` 3 times to be processed later,
    react may batch the update requests together into a single update for better performance.
    React merges setState() calls into one final merged object using Object.assign() so that it uses setState
    only once. So we need to be careful when changing state using current state.
*/