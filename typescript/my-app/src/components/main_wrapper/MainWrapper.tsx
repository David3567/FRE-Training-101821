import React, { Component } from 'react'
//import PubSub from 'pubsub-js'
import './MainWrapper.css'
import fetchTenAlbumList from '../../utility/fetchTenAlbumList'

interface State {
	name: string
	albumArr: Array<Object>
	albumCount: number
	offset: number
}
interface Props {
	name: string
}
export default class MainWrapper extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { name: props.name, albumArr: [], albumCount: -1, offset: 1 }
	}

	//   const [input, setInput] = useState();
	//   useEffect(() => {
	//     PubSub.publishSync("input1", input);
	//   }, [input]);

	// handleClick = (event: React.MouseEvent) => {
	// 	const element = event.currentTarget as HTMLInputElement
	// 	this.setState({ input: element.value.trim() })
	// }
	render() {
		return (
			<main className='app__main'>
				<div className='app__counter'>
					<p>{this.state.albumCount !== -1 && this.state.name !== '' ? `${this.state.albumCount} results for "${this.state.name}"` : 'Search Albums by ArtistName:'}</p>
				</div>
				{/* <div className='card-container'>
					{this.state.albumArr.map((item, index) => {
						return <Album title={item.collectionName.length > 30 ? item.collectionName.substring(0, 30) + '...' : item.collectionName} imgSrc={item.artworkUrl100} key={index} />
					})}
				</div> */}
				<div className='app__page-selector'>
					<button
						className='a-next a-round'
						// onClick={this.handleClick}
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
