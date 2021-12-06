import React from "react";

const MyReactRouterContext = React.createContext(null);

export const useForceUpdate = () => {
    const [_, update] = React.useState(false);
    return () => update((pre) => !pre);
};

const MyBrowserRoute = ({ children }) => {
    console.log("update");
    const forceupdate = useForceUpdate();
    const pushState = (state, title, url) => {
        window.history.pushState(state, title, url);
        forceupdate();
    };

    React.useEffect(() => {
        window.addEventListener("popstate", (event) => {
            forceupdate();
        });
        return () => {
            //clean
        };
    }, []);

    return (
        <MyReactRouterContext.Provider value={{ pushState }}>
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
        this.context.pushState({}, "", this.props.to);
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

        let isMatch;
        if (exact) {
            isMatch = window.location.pathname === path;
        } else {
            isMatch = window.location.pathname.startsWith(path);
        }

        if (component && isMatch) {
            return React.createElement(component, "", {});
        }

        return isMatch ? children : null;
    }

    componentDidUpdate() {
        console.log("MyRoute update");
    }
}

class MySwitch extends React.Component {
    render() {
        const pathName = window.location.pathname;
        const { children } = this.props;
        for (let i = 0; i < children.length; i++) {
            const { props } = children[i];
            if (props.exact === true) {
                // case when exact is applied
                if (pathName === props.path) {
                    return children[i]; // only one children is return
                }
            } else {
                if (pathName.startsWith(props.path)) {
                    return children[i];
                }
            }
        }
        return null;
    }
}

class MyRedirect extends React.Component {
    static contextType = MyReactRouterContext;
    componentDidMount() {
        this.context.pushState({}, "", this.props.to);
    }
    render() {
        return <></>;
    }
}

export { MyBrowserRoute, MyRoute, MyLink, MySwitch, MyRedirect };