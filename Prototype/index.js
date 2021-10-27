const arr = [1, 2, 3, 4, 5, 6];


//myFilter
Array.prototype.myFilter = function (callbackFn) {
    let result = [];
    for(let i = 0; i < this.length; i++){
        let filter = callbackFn(this[i], i, this);
        if(filter){
            result.push(this[i]);
        }
    }
    return result;
}
console.log(arr.myFilter(nums => nums > 3));//output: 4, 5, 6


//myMap
Array.prototype.myMap = function (callbackFn) {
    let result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callbackFn(this[i], i, this));
    }
    return result;
}
console.log(arr.myMap(nums => nums*2));//output: 1, 4, 6, 8, 10, 12


//myReduce
Array.prototype.myReduce = function (callbackFn, currentVal) {
    let value = currentVal ? currentVal : 0;
    for(let i = 0; i < this.length; i++){
        value = callbackFn(value, this[i], i, this)
    }
    return value;
}
const reducer = (previousVal, currentVal) => previousVal + currentVal;
console.log(arr.myReduce(reducer));//output: 21


//mySome
Array.prototype.mySome = function (callbackFn) {
    for(let i = 0; i < this.length; i++){
        let result = callbackFn(this[i], i, this);
        if(result) return true;
    }
    return false;
}
console.log("mySome is true", arr.mySome(nums => nums > 1));//output: true;
console.log("mySome is false", arr.mySome(nums => nums < 1));//output: false;


//myEvery
Array.prototype.myEvery = function (callbackFn) {
    for(let i = 0; i < this.length; i++){
        let result = callbackFn(this[i], i, this);
        if(!result) return false;
    }
    return true;
}
console.log("myEvery is true", arr.myEvery(nums => nums > 0));//output: true;
console.log("myEvery is false", arr.myEvery(nums => nums > 2));//output: false;