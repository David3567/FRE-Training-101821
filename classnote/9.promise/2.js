function dosomethingOne() {
	console.log('dosomethingOne')
}

function dosomethingTwo() {
	console.log('dosomethingTwo')
}

//3. turn composition function callAfter2Second to a high order function
//which receives a callback function as its parameter.
function callAfter2Second(callbackFn) {
	setTimeout(() => {
		callbackFn()
	}, 2000)
}

//i want to see dosomethingOne after 2 seconds,
//then i want to see dosomethingTwo after another 2 seconds.
callAfter2Second(() => {
	dosomethingOne()
	callAfter2Second(dosomethingTwo)
})
