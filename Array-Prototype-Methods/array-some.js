Array.prototype.mySome = function(callbackFunction) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFunction(this[i], i, this)) return true;
  }
  return false;
}
