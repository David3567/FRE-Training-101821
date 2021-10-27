const arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

// Array.prototype.filter
Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

let resMyFilter = arr.myFilter((x, index, arr) => x % 2 === 1);
console.log("myFilter", resMyFilter);

// Array.prototype.map
Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 1; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

let resMyMap = arr.myMap((x, index, arr) => x * 2);
console.log("myMap", resMyMap);

// Array.prototype.reduce
Array.prototype.myReduce = function (cb, init) {
  let total = init !== undefined ? init : 0;
  for (let i = 0; i < this.length; i++) {
    total = cb(total, this[i]);
  }
  return total;
};

let resMyReduce = arr.myReduce((prev, cur) => {
  return prev + cur;
});
console.log("myReduce", resMyReduce);

// Array.prototype.some
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
      break;
    }
  }
  return false;
};

let resMySome = arr.mySome((x) => x > 200);
console.log("mySome", resMySome);

// Array.prototype.every
Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
      break;
    }
  }
  return true;
};

let resMyEvery = arr.myEvery((x) => x % 2 === 0);
console.log("myEvery", resMyEvery);
