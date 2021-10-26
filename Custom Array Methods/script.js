//custom Array Methods

// 1 - Filter

Array.prototype.myFilter = function (callbackFn) {
    let filtered = [];
  
    for (let i = 0; i < this.length; i++) {
      if (callbackFn(this[i], i, this)) {
        filtered.push(this[i]);
      }
    }
    return filtered;
  };
  
  // 2 - Custom Reduce
  
  Array.prototype.myReduce = function (callbackFn, initialValue) {
    let totalValue = initialValue !== undefined ? initialValue : 0;
    for (let i = 0; i < this.length; i++) {
      totalValue = callbackFn(totalValue, this[i]);
    }
    return totalValue;
  };
  
  // 3 - Custom Map
  
  Array.prototype.myMap = function (callback) {
    let mapped = [];
    for (let i = 0; i < this.length; i++) {
      mapped.push(callback(this[i], i, this));
    }
    return mapped;
  };
  
  // 4 - Custom Some Method
  
  Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
        break;
      }
    }
  
    return false;
  };
  
  // 5 - Custom Every Method
  
  Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
        break;
      }
    }
    return true;
  };
  
  // Tests
  const arr = [1, 5, 10, 15, 20];
  
  const customMethods = (array) => {
    //filter
    const filterResult = array.myFilter((num) => {
      return num > 8;
    });
    //reduce
    const reduceResult = array.myReduce((prev, cur) => {
      return prev + cur;
    });
    //map
    const multiplyMap = array.myMap((num) => num * 2);
    //Some
    const someTest = array.mySome((num) => num % 2 === 0);
    //every
    const everyTest = array.myEvery((num) => num % 2 === 0);
    //
    // console.log(filterResult);
    // console.log(reduceResult);
    // console.log(multiplyMap);
    // console.log(someTest);
    console.log(everyTest);
  };
  
  customMethods(arr);
  