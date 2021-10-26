Array.prototype.myMap = function(callbackFunction) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callbackFunction(this[i], i, this));
  }
  return newArray;
}
