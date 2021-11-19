import React, { Component } from 'react'
import './Album.css'

interface Props {
	imgSrc: string
	title: string
}
export default class Header extends Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		return (
			<div className='card-wrapper'>
				<article className='card'>
					<div>
						<img src={this.props.imgSrc} alt='album picture' />
					</div>

					<p>{this.props.title}</p>
				</article>
			</div>
		)
	}
}
