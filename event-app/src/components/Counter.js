import React from "react";
import Button from "./Button";

let data = {
	counter: 1000,
};
// UI = React (state)

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "counter",
			counter: 0,
			hideBtnAdd: false,
		};

		console.log("Counter constructor");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("Counter getDerivedStateFromProps");
		if (props.title !== state.title) {
			//Change in props
			return {
				title: props.title,
			};
		}
		return null; // No change to state
	}
	render() {
		console.log("Counter render");

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
						}, 3000);
					}}
				>
					Alert After 3s
				</Button>
			</section>
		);
	}

	componentDidMount() {
		console.log("Counter componentDidMount");
	}
}

export default Counter;
