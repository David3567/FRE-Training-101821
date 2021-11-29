import React from "react";

export const withAddNote = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        content: "",
      };
    }

    handleChange = (event) => {
      const { name, value } = event.target;
      /*
        setNote((preNote) => {
            return {...preNote, [name]:value}  //manually update the note since setNote do not merge
        })
        */
      this.setState((preState) => {
        return { ...preState, [name]: value };
      });
    };
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onAdd(this.state);
      this.setState({ title: "", content: "" }); //reset the addnote field
    };
    render() {
      return (
        <WrappedComponent
          {...this.props}
          note={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></WrappedComponent>
      );
    }
  };
};
