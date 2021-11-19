import axios from 'axios'

export default function fetchTenAlbumList(name: string, offset: number) {
	return (
		axios
			.get(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=10&offset=${offset}`, {})

			.then((r) => {
				if (r.status === 200) {
					return r.data
				}
			})
			// catch error
			.catch((err) => {
				console.log(err)
			})
	)
}
