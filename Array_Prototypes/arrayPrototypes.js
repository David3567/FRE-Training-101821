Array.prototype.myFilter = function (callback) {
	const result = [];
	for (let i = 0; i < this.length; i++) {
		let match = callback(this[i], i, this);
		if (match) {
			result.push(this[i]);
		}
	}
	return result;
};
// myFilter Test
let arr = [1, 5, 10];
let filteredArr = arr.myFilter((item) => item > 3);
console.log(filteredArr); //[5, 10]

Array.prototype.myMap = function (callback) {
	const result = [];
	for (let i = 0; i < this.length; i++) {
		let newItem = callback(this[i], i, this);
		result.push(newItem);
	}
	return result;
};
// myMap Test
let arr = ["apple", "pear", "orange", "strawberry"];
let mappedArr = arr.myMap((item) => item.length);
console.log(mappedArr); //[5, 4, 6, 10]

Array.prototype.myReduce = function (callback, initialValue) {
	this.unshift(initialValue);
	for (let i = 1; i < this.length; i++) {
		let reducer = callback(initialValue, arr[i], i, arr);
	}
	return reducer;
};
// myReduce Test
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((prev, curr) => prev + curr, 1);
console.log(result); //16

Array.prototype.mySome = function (callback) {
	for (let i = 0; i < this.length; i++) {
		let value = callback(this[i], i, this);
		if (value) {
			return true;
		}
	}
	return false;
};
// myReduce Test
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((prev, curr) => prev + curr, 1);
console.log(result); //16

Array.prototype.myEvery = function (callback) {
	for (let i = 0; i < this.length; i++) {
		let value = callback(this[i], i, this);
		if (!value) {
			return false;
		}
	}
	return true;
};
// myEvery Test
let nums = [1, 2, 3, 4, 5];
let everyNum = nums.every((num) => num < 6);
console.log(everyNum); //true
let everyNumFalse = nums.every((num) => num > 5);
console.log(everyNumFalse); //false
