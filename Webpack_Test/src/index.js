import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import styles from './styles/app.scss';

class HelloMessage extends React.Component {
	render() {
		return (
			<>
				<div>Hello!!!!! {this.props.name}</div>
				<Button />
			</>
		);
	}
}

ReactDOM.render(
	<HelloMessage name="Patrick" />,
	document.getElementById("webpack-example")
);
