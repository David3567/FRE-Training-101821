// Array.prototype.filter
Array.prototype.myFilter = function( callbackFn ){
    let res = [];
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i))
        res.push(this[i]);
    }

    return res;
}

// example from MDN Web Docs
const num = [3, 6, 4, 8, 1, 9];
const filter = num.myFilter(n => n > 3);
console.log(filter)

// Array.prototype.map
Array.prototype.myMap = function( callbackFn ){
    let res = [];
    for(let i = 0; i < this.length; i++) {
        res.push(callbackFn(this[i], i));
    }

    return res;
}

// example from MDN Web Docs
const num1 = [1, 4, 9, 16];
const map = num1.myMap(x => x * 2);
console.log(map);

// Array.prototype.reduce
Array.prototype.myReduce = function ( callbackFn, previousValue ){
    let res;
    if(previousValue) {
        res = previousValue;
    } else {
        res = 0;
    }
    for(let i = 0; i < this.length; i++) {
        res = callbackFn(res, this[i], i);
    }
    return res;
}

// example from MDN Web Docs
const num2 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
let reduce = num2.myReduce(reducer);
console.log(reduce);
reduce = num2.myReduce(reducer, 5);
console.log(reduce);


// Array.prototype.some
Array.prototype.mySome = function (callbackFn ) {
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i)) {
            return true;
        }
    }
    return false;
}

// example from MDN Web Docs
const num3 = [1, 2, 3, 4, 5];
const some = num3.mySome((element) => element % 2 === 0);
console.log(some);

// Array.prototype.every
Array.prototype.myEvery = function (callbackFn ) {
    for(let i = 0; i < this.length; i++) {
        if(!callbackFn(this[i], i)) {
            return false;
        }
    }
    return true;
}

// example from MDN Web Docs
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.myEvery(isBelowThreshold));