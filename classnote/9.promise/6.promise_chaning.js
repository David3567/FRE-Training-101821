//build myPromise
class MyPromise {
	constructor(cb) {
		this.resolve = this.resolve.bind(this)
		this.PromiseState = 'pending'
		this.onFulfillmentList = []
		cb(this.resolve)
	}
	resolve(value) {
		this.PromiseState = 'fulfill' //this inside this function is undefined, so we need to use bind to change this
		this.value = value
		setTimeout(async () => {
			console.log('this:', this)

			for (let i = 0; i < this.onFulfillmentList.length; i++) {
				let result = await this.onFulfillmentList[i](this.value)
				console.log('result:', result)
				this.value = result
				// if (result instanceof MyPromise) {
				// 	result.then((data) => {
				// 		this.value = data
				// 	})
				// } else {
				// 	this.value = result
				// }
			}
		})
	}
	then(onFulfillmentFn) {
		this.onFulfillmentList.push(onFulfillmentFn)
		return this
	}
}

console.log('before new Promise')
//---------test----------
let p = new MyPromise((resolve, reject) => {
	console.log('hello')
	setTimeout(() => {
		resolve({ name: 'patrick' })
	}, 3000)
})
p.then((value) => {
	console.log('value:', value)
	return new Promise((res, rej) => {
		res(5)
	})
}).then((value2) => {
	console.log('value2:', value2)
})

console.log('after new Promise')
