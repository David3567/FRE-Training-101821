import React, { Component } from 'react'
//import PubSub from 'pubsub-js'
import './MainWrapper.css'
import fetchTenAlbumList from '../../utility/fetchTenAlbumList'
import Album from './album/Album'
interface State {
	name: string
	albumArr: Array<{ collectionName: string; artworkUrl100: string }>
	albumCount: number
	offset: number
}

interface Props {
	name: string
}
export default class MainWrapper extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { name: this.props.name, albumArr: [], albumCount: -1, offset: 1 }
	}

	handleClick = () => {
		this.setState({ offset: this.state.offset + 10 })
		fetchTenAlbumList(this.props.name, this.state.offset + 10).then((data) => {
			if (data) {
				this.setState({ albumArr: this.state.albumArr.concat(data.results), albumCount: this.state.albumCount + data.resultCount })
			}
		})
	}

	componentDidUpdate(prevProps: Props) {
		// Typical usage (don't forget to compare props):
		if (this.props.name !== prevProps.name) {
			this.setState({ name: this.props.name })
			fetchTenAlbumList(this.props.name, this.state.offset).then((data) => {
				console.log('data', data)
				if (data) {
					this.setState({ offset: this.state.offset + 10, albumArr: this.state.albumArr.concat(data.results), albumCount: data.resultCount })
				}
			})
		}
	}

	render() {
		return (
			<main className='app__main'>
				<div className='app__counter'>
					<p>{this.state.albumCount !== -1 && this.state.name !== '' ? `${this.state.albumCount} results for "${this.state.name}"` : 'Search Albums by ArtistName:'}</p>
				</div>
				<div className='card-container'>
					{this.state.albumArr.map((item, index) => {
						return <Album title={item.collectionName.length > 30 ? item.collectionName.substring(0, 30) + '...' : item.collectionName} imgSrc={item.artworkUrl100} key={index} />
					})}
				</div>
				<div className='app__page-selector'>
					<button
						className='a-next a-round'
						onClick={this.handleClick}
						style={{
							display: this.state.albumCount !== -1 && this.state.name !== '' && this.state.albumCount !== 0 ? 'inline' : 'none',
						}}
					>
						load more
					</button>
				</div>
			</main>
		)
	}
}
