Array.prototype.myFilter = function(callbackFunction) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFunction(this[i])) {
      newArray.push(this[i], i, this);
    }
  }
  return newArray;
}
