let arr = [2,5,3,1]

//Filter
Array.prototype.myFilter = function (callbackFn) {
  let newArr = [];
  for(let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

console.log(arr.myFilter((num) => num > 1)); //[2, 5, 3]


//Map
Array.prototype.myMap = function (callbackFn) {
  let newArr = [];
  for(let i = 0; i < this.length; i++) {
    newArr.push(callbackFn(this[i]));
  }
  return newArr;
}

console.log(arr.myMap((num) => num * 2)); //[4, 10, 6, 2]


//Reduce
Array.prototype.myReduce = function (callbackFn) {
  let sum = 0;
  for(let i = 0; i < this.length; i++) {
    callbackFn(sum = sum + this[i]);
  }
  return sum;
}

console.log(arr.myReduce((accumulator, current) => accumulator + current )) // 11


//Some
Array.prototype.mySome = function (callbackFn) {
  for(let i = 0; i < this.length; i++) {
    if(callbackFn(this[i])) {
      return true;
    }
  }
  return false;
}

console.log(arr.mySome((num) => num % 2 === 0)); //true


//Every
Array.prototype.myEvery = function (callbackFn) {
  for(let i = 0; i < this.length; i++) {
        if(!callbackFn(this[i])) {
          return false;
        }
      }
      return true;
}

console.log(arr.myEvery((num) => num % 2 === 0)); //false