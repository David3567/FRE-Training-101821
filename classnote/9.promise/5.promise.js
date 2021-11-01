//build myPromise
class MyPromise {
	constructor(cb) {
		this.resolve = this.resolve.bind(this)
		this.PromiseState = 'pending'
		cb(this.resolve)
	}
	resolve(value) {
		this.PromiseState = 'fulfill' //this inside this function is undefined, so we need to use bind to change this
		this.value = value
		setTimeout(() => {
			if (this.onFulfillmentFn) {
				this.onFulfillmentFn(this.value)
			}
		})
	}
	then(onFulfillmentFn) {
		this.onFulfillmentFn = onFulfillmentFn
	}
}

console.log('before new Promise')
//---------test----------
let p = new MyPromise((resolve, reject) => {
	console.log('hello')
	setTimeout(() => {
		resolve('resolve value')
	}, 3000)
})

p.then((value) => {
	console.log('value', value)
})

console.log('after new Promise')
