Array.prototype.every = function(callbackFunction) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFunction(this[i], i, this) === false) return false;
  }
  return true;
}
