Array.prototype.myReduce = function(callbackFunction, initialValue) {
  let sum = 0;
  if (typeof initialValue === 'number') {
    sum = initialValue;
  }
  for (let i = 0; i < this.length; i++) {
    callbackFunction(sum, this[i], i, this)
  }
  return sum;
}
