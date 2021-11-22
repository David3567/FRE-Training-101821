
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('Button Constructor');
  }
  render() {
    console.log('Button render');
    console.log(this.props);
    const { children, ...rest } = this.props;
    return <button {...rest}>{children}</button>;
  }
  componentDidMount() {
    console.log('Button componentDidMount');
  }
  componentWillUnmount() {
    console.log('Button componentWillUnmount');
  }
}

export default Button;

// spread operater, rest operater