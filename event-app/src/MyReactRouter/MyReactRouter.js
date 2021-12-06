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
	const replaceState = (state, title, url) => {
		window.history.replaceState(state, title, url);
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
		// console.log(exact, path, children);
		// console.log(window.location);

		const isMatch = window.location.pathname.includes(path);
		if (isMatch) {
			if (typeof component === "function") {
				return React.createElement(component, null, {});
			}
		}

		return isMatch ? children : null;
	}

	componentDidUpdate() {
		console.log("MyRoute update");
	}
}

class MySwitch extends React.Component {
	render() {
		const { children } = this.props;
		const path = window.location.pathname;
		let match = false;
		let switchComponent = null;
		React.Children.forEach(children, (item) => {
			if (match === true) return null;
			if (path === item.props.path) {
				match = true;
				switchComponent = item;
			}
		});
		return switchComponent;
	}
}

class MyRedirect extends React.Component {
	static contextType = MyReactRouterContext;

	componentDidMount() {
		this.context.replaceState({}, "", this.props.to);
	}

	render() {
		return null;
	}
}

export { MyBrowserRoute, MyRoute, MyLink, MySwitch, MyRedirect };
