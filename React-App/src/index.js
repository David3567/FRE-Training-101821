import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";

export default class App extends React.Component {
  render() {
    return <h1>React App</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
