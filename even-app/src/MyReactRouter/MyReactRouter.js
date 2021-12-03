import React from 'react';

const BrowserRoute = () => {
  return null;
};

class MyLink extends React.Component {
  hanldeClick = (e) => {
    e.preventDefault();
    alert('test');
  };
  render() {
    const { to, children } = this.props;

    return (
      <a href={to} onClick={this.hanldeClick}>
        {children}
      </a>
    );
  }
}

class MyRoute extends React.Component {
  render() {
    const { exact, path, children } = this.props;
    console.log(exact, path, children);
    console.log(window.location);

    const isMatch = window.location.pathname === path;

    return isMatch ? children : null;
  }
}

export { BrowserRoute, MyRoute, MyLink };
