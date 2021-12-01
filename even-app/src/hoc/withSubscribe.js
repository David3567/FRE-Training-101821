import React from 'react';

import { mystore } from '../MyRedux/MyRedux';

export const withSubscribe = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    componentDidMount() {
      mystore.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
      mystore.unsubscribe(() => this.forceUpdate());
    }
    render() {
      return <WrappedComponent {...this.props}></WrappedComponent>;
    }
  };
};
