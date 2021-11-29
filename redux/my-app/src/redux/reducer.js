//reducer is a function, which receive 2 args.
//action is an object, type and value
const initState = 0

export default function reducer(preState = initState, action) {
	const { type, data } = action
	switch (type) {
		case 'increment':
			return preState + data
			break
		case 'decrement':
			return preState - data
			break
		default:
			return preState
	}
}
