// copycat map(), filter(), reduce(), some(), and every() functions

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this);
    if (result) result.push(this[i]);
  }
  return result;
};

Array.prototype.myReduce = function (callback, value) {
  for (let i = 0; i < this.length; i++) {
    value = callback(value, this[i]);
  }
  return value;
};

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return true;
  }
  return false;
};

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) return false;
  }
  return true;
};