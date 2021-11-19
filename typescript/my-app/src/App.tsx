import React, { Component } from 'react'
import Header from './components/header/Header'
import MainWrapper from './components/main_wrapper/MainWrapper'
import './App.css'

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
			<div className='App'>
				<Header handleSearch={this.handleSearch} />
				<MainWrapper name={this.state.name} />
			</div>
		)
	}
}

export default App
