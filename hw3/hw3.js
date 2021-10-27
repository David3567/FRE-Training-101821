//Array.prototype.filter
// Array.prototype.map
// Array.prototype.reduce
// Array.prototype.some
// Array.prototype.every
//Build your own forEach function
let arr = [1, 2, 3];  //[2, 4, 6]
let arr2 = [2, 4, 6]; //[4, 8, 12]

let forEachResult = arr.forEach((item) => {item * 3})   //forEach returns undefined, you can use forEach to override the original array
console.log(forEachResult)  //undefined

Array.prototype.myforEach = function(callbackFn) {
   console.log("this", this)  //[2, 4, 6], this related to the array we pass in
   for (let i = 0; i < this.length; i++) {    //every() some() help you break the iteration, otherwise, you can not break the iteration
     callbackFn(this[i], i, this)   //item 2 index 0 array (3) [2, 4, 6]; item 4 index 1 array (3) [2, 4, 6]; item 6 index 2 array (3) [2, 4, 6]
   }
}
function multiplyByTwo(arr){
  let res = [];
  arr.myforEach((item, index, array) => { 
    console.log("item", item, "index", index, "array", array)
    res.push(item * 2)
  })  
  return res;
}
console.log(multiplyByTwo(arr2)) //[4, 8, 12]
//map returns an new array
Array.prototype.myMap = function(callbackFn) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callbackFn(this[i], i, this));  
  }
  return res;
}

// reduce returns whatever callback fucntion output
Array.prototype.myReduce = function(callbackFn,initialValue) {
  let res = initialValue;
  for (let i = 0; i < this.length; i++) {
    let currentValue = this[i];
    res = callbackFn(res, currentValue);
  }
  return res;
}

//some returns true or false
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return true;
      break;
    }
  }
  return false;
}

//every returns true or false
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i], i, this)) {
      return false;
      break;
    }
  }
return true;
}

// filter returns array
Array.prototype.myFilter = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if(callbackFn(this[i],i,this)){
      res.push(this[i]);
    }
  }
  return res;
}
