import React from 'react'
import './style.scss'
class Hello extends React.Component {
	render() {
		const element = (
			<div className='red'>
				<h1>Hello World from ReactJS</h1>
				<hr />
				Yo Yo ! Welcome!
			</div>
		)
		return element
	}
}

export default Hello
