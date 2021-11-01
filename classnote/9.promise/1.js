function dosomethingTwo() {
	console.log('dosomethingTwo')
}

// //1. use composition
// function callAfter2Second() {
// 	setTimeout(() => {
// 		dosomethingTwo()
//      console.log('we can add other code here')
// 	}, 2000)
// }
// callAfter2Second()

// //2. use composition
// function callAfter2Second() {
// 	setTimeout(dosomethingTwo, 2000)
// }
// callAfter2Second()

// //3. turn composition function callAfter2Second to a high order function
// //which receives a callback function as its parameter.
// function callAfter2Second(callbackFn) {
// 	setTimeout(() => {
// 		callbackFn()
// 	}, 2000)
// }
// callAfter2Second(dosomethingTwo)

//4. turn composition function callAfter2Second to a high order function
//which receives a callback function as its parameter.
function callAfter2Second(callbackFn) {
	setTimeout(callbackFn, 2000)
}
callAfter2Second(dosomethingTwo)
