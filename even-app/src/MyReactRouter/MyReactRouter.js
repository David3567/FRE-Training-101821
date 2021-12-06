import React from 'react';

const MyReactRouterContext = React.createContext(null);

export const useForceUpdate = () => {
  const [_, update] = React.useState(false);
  return () => update((pre) => !pre);
};

const MyBrowserRoute = ({ children }) => {
  console.log('update');
  const forceupdate = useForceUpdate();
  const pushState = (state, title, url) => {
    window.history.pushState(state, title, url);
    forceupdate();
  };
  const replaceState = (state, title, url) => {
    window.history.replaceState(state, title, url);
    forceupdate();
  };

  React.useEffect(() => {
    window.addEventListener('popstate', (event) => {
      forceupdate();
    });
    return () => {
      //clean
    };
  }, []);

  return (
    <MyReactRouterContext.Provider value={{ pushState, replaceState }}>
      {/* {children} */}
      {React.cloneElement(children, {})}
    </MyReactRouterContext.Provider>
  );
};

class MyLink extends React.Component {
  static contextType = MyReactRouterContext;
  hanldeClick = (e) => {
    e.preventDefault();
    //  console.log(this.context);
    this.context.pushState({}, '', this.props.to);
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

// console.log('test', <h1>Hello</h1>);
// console.log('test', React.createElement('h1', null, 'hello'));

class MyRoute extends React.Component {
  render() {
    const { exact, path, children, component } = this.props;
    // console.log(exact, path, children);
    // console.log(window.location);

    const isMatch = exact && window.location.pathname === path;
    if (isMatch) {
      if (typeof component === 'function') {
        return React.createElement(component, null, {});
      }
    }

    return isMatch ? children : null;
  }

  componentDidUpdate() {
    console.log('MyRoute update');
  }
}

class MyRedirect extends React.Component {
  static contextType = MyReactRouterContext;

  componentDidMount() {
    console.log('MyRedirect update');
    const { to, push, from, sensitive } = this.props;

    if (sensitive) {
      // if case sensitive
      if (to !== from) console.log(`route doesn't match`);
    } else if (push) {
      this.context.pushState(from, '', to);
    } else {
      this.context.replaceState(from, '', to);
    }
  }

  componentDidUpdate() {
    console.log('MyRedirect updated');
  }

  render() {
    return null;
  }
}

class MySwitch extends React.Component {
  render() {
    const { children } = this.props;

    let element, match;

    // We use React.Children.forEach instead of React.Children.toArray().find()
    // here because toArray adds keys to all child elements and we do not want
    // to trigger an unmount/remount for two <Route>s that render the same
    // component at different URLs.
    React.Children.forEach(children, (child) => {
      if (match == null && React.isValidElement(child)) {
        element = child;

        const path = child.props.path || child.props.from;

        match = path ? window.location.pathname === path : context.match;
      }
    });

    return match
      ? React.cloneElement(element, {
          location: window.location.pathname,
          computedMatch: match
        })
      : null;
  }

  componentDidUpdate() {
    console.log('MySwitch update');
  }
}

export { MyBrowserRoute, MyRoute, MyLink, MyRedirect, MySwitch };
