//Array.prototype.filter
// Array.prototype.map
// Array.prototype.reduce
// Array.prototype.some
// Array.prototype.every

//Array.prototype.filter
Array.prototype.myFilter = function (cb) {
	let newArr = []
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i]) === true) {
			newArr.push(this[i])
		}
	}
	return newArr
}

// Array.prototype.map--creates a new array populated with the results of calling a provided function on every element in the calling array.
Array.prototype.myMap = function (cb) {
	let newArr = []
	for (let i = 0; i < this.length; i++) {
		newArr.push(cb(this[i]))
	}
	return newArr
}

// Array.prototype.reduce
Array.prototype.myReduce = function (cb, initial) {
	let prev
	if (initial === undefined) {
		prev = this[0]
		curr_index = 1
	} else {
		prev = initial
		curr_index = 0
	}
	for (let i = curr_index; i < this.length; i++) {
		prev = cb(prev, this[i])
	}
	return prev
}

// Array.prototype.some - The some() method tests whether at least one element in the array passes the test implemented by the provided function.
Array.prototype.mySome = function (cb) {
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i]) === true) {
			return true
		}
	}
	return false
}

// Array.prototype.every - The every() method tests whether all elements in the array pass the test implemented by the provided function.
Array.prototype.myEvery = function (cb) {
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i]) === false) {
			return false
		}
	}
	return true
}

// test
let arr = [1, 2, 3, 4]
//test for myFilter
let result = arr.myFilter((item) => {
	return item > 2
})
console.log(result)

//test for myMap
let result2 = arr.myMap((item) => {
	return item * 2
})
console.log(result2)

//test for myFmyReduceilter
console.log(arr.myReduce((prev, curr) => prev + curr))

//test for mySome
let result3 = arr.mySome((item) => {
	return item === 2
})
console.log(result3)

//test for myEvery
let result4 = arr.myEvery((item) => {
	return item === 2
})
console.log(result4)
