import React, { Component } from "react";

class RenderAddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <>
        {this.props.children(this.state, this.handleChange, this.handleSubmit)}
      </>
    );
  }
}

export default RenderAddNote;
