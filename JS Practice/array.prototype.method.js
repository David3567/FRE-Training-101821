const nums = [1, 2, 3];
console.log("nums:", nums);

// Array.prototype.filter
console.log("======================== Filter ========================");

const oddNums = nums.filter((num) => num % 2 === 1);

Array.prototype.myFilter = function (callbackFn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const myOddNums = nums.myFilter((num) => num % 2 === 1);

console.log("Array.prototype.filter: oddNums", oddNums);
console.log("Array.prototype.myFilter: myOddNums", myOddNums);

// Array.prototype.map
console.log("========================= Map =========================");

const doubleNums = nums.map((num) => num * 2);

Array.prototype.myMap = function (callbackFn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    let newItem = callbackFn(this[i], i, this);
    arr.push(newItem);
  }
  return arr;
};

const myDoubleNums = nums.myMap((num) => num * 2);

console.log("Array.prototype.map: doubleNums", doubleNums);
console.log("Array.prototype.myMap: doubleMyNums", myDoubleNums);

// Array.prototype.reduce
console.log("======================== Reduce ========================");

const addNums = nums.reduce((prev, curr) => prev + curr);

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let result = initialValue ? initialValue : 0;
  for (let i = 0; i < this.length; i++) {
    result = callbackFn(result, this[i], i, this);
  }
  return result;
};

const myAddNums = nums.myReduce((prev, curr) => prev + curr);

console.log("Array.prototype.reduce: addNums", addNums);
console.log("Array.prototype.myReduce: addMyNums", myAddNums);

// Array.prototype.some
console.log("========================= Some =========================");

const atLeastOneEven = nums.some((num) => num % 2 === 0);

Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const myAtLeastOneEven = nums.mySome((num) => num % 2 === 0);

console.log("Array.prototype.some: atLeastOneEven", atLeastOneEven);
console.log("Array.prototype.mySome: myAtLeastOneEven", myAtLeastOneEven);

// Array.prototype.every
console.log("========================= Every =========================");

const isAllEven = nums.every((num) => num % 2 === 0);

Array.prototype.myEvery = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const myIsAllEven = nums.myEvery((num) => num % 2 === 0);

console.log("Array.prototype.every: isAllEven", isAllEven);
console.log("Array.prototype.myEvery: myIsAllEven", myIsAllEven);
