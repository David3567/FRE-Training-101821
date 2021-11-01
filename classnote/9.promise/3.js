function dosomething(msg) {
	console.log(`doing thing ${msg}`)
}
// function callAfter2Second(callbackFn) {
// 	setTimeout(callbackFn, 2000)
// }

// callAfter2Second(() => {
// 	dosomething(1)
// 	callAfter2Second(() => {
// 		dosomething(2)
// 		callAfter2Second(() => {
// 			dosomething(3)
// 			callAfter2Second(() => {
// 				dosomething(4)
// 				callAfter2Second(() => {
// 					dosomething(5)
// 				})
// 			})
// 		})
// 	})
// })

function callAfter2SecondWithPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('next')
		}, 2000)
	})
}

callAfter2SecondWithPromise()
	.then(() => {
		dosomething(1)
		return callAfter2SecondWithPromise()
	})
	.then(() => {
		dosomething(2)
		return callAfter2SecondWithPromise()
	})
	.then(() => {
		dosomething(3)
		return callAfter2SecondWithPromise()
	})
	.then(() => {
		dosomething(4)
		return callAfter2SecondWithPromise()
	})
	.then(() => {
		dosomething(5)
		return callAfter2SecondWithPromise()
	})
