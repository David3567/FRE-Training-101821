// Test array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Nums: ', nums);

// Array.prototype.filter
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};
const odds = nums.filter((num) => num % 2 !== 0);
console.log('myFilter: ', odds);

// Array.prototype.map
Array.prototype.myMap = function (callbackFn, thisArg) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackFn(this[i], i, this));
  }
  return newArr;
};
const timesTen = nums.myMap((num) => num * 10);
console.log('myMap: ', timesTen);

// Array.prototype.reduce
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let arr = this;
  if (initialValue === undefined) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }
  let result = initialValue;
  arr.forEach((el) => (result = callbackFn(result, el)));

  return result;
};
const sum = nums.myReduce((accumulator, current) => accumulator + current);
const sumWithInitial = nums.myReduce(
  (accumulator, current) => accumulator + current,
  5
);
console.log('myReduce: ', sum); //55
console.log('myReduceWithInitial: ', sumWithInitial); // 60

// Array.prototype.some
Array.prototype.mySome = function (callbackFn, thisArg) {
  let result = false;
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      result = true;
      break;
    }
  }
  return result;
};
const greaterThan10 = nums.mySome((num) => num > 10); // False
const lessThan10 = nums.mySome((num) => num < 10); // True
console.log('mySome>10', greaterThan10);
console.log('mySome<10', lessThan10);

// Array.prototype.every
Array.prototype.myEvery = function (callbackFn, thisArg) {
  let result = true;
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i], i, this)) {
      result = false;
      break;
    }
  }
  return result;
};
const greaterThan0 = nums.myEvery((num) => num > 0); // True
const lessThan9 = nums.myEvery((num) => num < 9); // False
console.log('myEvery>0', greaterThan0);
console.log('myEvery<9', lessThan9);
