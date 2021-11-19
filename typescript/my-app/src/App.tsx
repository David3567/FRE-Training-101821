import React, { Component } from 'react'
import Header from './components/header/Header'
import MainWrapper from './components/main_wrapper/MainWrapper'
import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <Header />

//     </div>
//   );
// }
interface State {
	name: string
}
interface Props {}

class App extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.handleSearch = this.handleSearch.bind(this)
		this.state = { name: '' }
	}

	handleSearch(input: string) {
		this.setState({ name: input })
	}

	render() {
		return (
			<div>
				<Header handleSearch={this.handleSearch} />
				<MainWrapper name={this.state.name} />
			</div>
		)
	}
}

export default App
