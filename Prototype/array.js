// declare myEach
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        callbackFn(this[i]);
    }
};

//---------------------------Filter----------------------------------
// Array Filter Method
const ages = [32, 33, 16, 40];
const greaterThan18 = ages.filter(
    (age) => age >= 18
);
console.log(greaterThan18); // [32, 33, 40]

// Array.prototype.filter
Array.prototype.myFilter = function(callbackFn) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}
console.log(ages.myFilter(age => (age >= 18)));  // [32, 33, 40]

//-------------------------Map----------------------------------------
// Array Map Method
const numbers = [4, 9, 16, 25];
const numSqrt = numbers.map(
    (num) => Math.sqrt(num)   
);
console.log(numSqrt); // [2, 3, 4, 5]

// Array.prototype.myMap
Array.prototype.myMap = function (callbackFn) {
    const mappedArray = [];
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(callbackFn(this[i]));
    }
    return mappedArray;
}
console.log(numbers.myMap(num => Math.sqrt(num))); // [2, 3, 4, 5]

// using myEach to rewrite Array.prototype.myMap
Array.prototype.myMap = function (callbackFn) {
    const mappedArray = [];
    this.myEach(element => mappedArray.push(callbackFn(element)));
    return mappedArray;
}
console.log(numbers.myMap(num => Math.sqrt(num)));  // [2, 3, 4, 5]
//-------------------------------------------------------------------

// -------------------------------Reduce-----------------------------
// Array Reduce Method
const sumAges = ages.reduce((acc, age) => {
    return acc + age;
}, 0);
console.log(sumAges); // 121

// Array.prototype.myReduce
Array.prototype.myReduce = function(callbackFn, initialValue) {
    let arr = this;
    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let result = initialValue;
    arr.myEach(el => result = callbackFn(result, el));
    return result;
}
console.log(ages.myReduce((acc, item) => acc + item));  // 121
// -------------------------------------------------------------------

//---------------------------------Some------------------------------
// Array Some Method
const ages1 = [3, 10, 18, 20];
const checkAgeGreaterThan18 = ages1.some(
    (age) => age >= 18        
);
console.log(checkAgeGreaterThan18); // true

// Array.prototype.mySome
Array.prototype.mySome = function(callbackFn) {
    let ans = false;
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) {
            ans = true;
            break;
        }
    }
    return ans;
}
console.log(ages1.mySome(age => age >= 18));  // true
//--------------------------------------------------------------------

//--------------------------------Every-------------------------------
// Array Every Method
const ageGreaterThan18 = ages.every(
    (age) => age > 18
);   
console.log(ageGreaterThan18); // false

// Array.prototype.myEvery
Array.prototype.myEvery = function(callbackFn) {
    let ans = true;
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i])) {
            ans = false;
            break;
        } 
    }
    return ans;
}
console.log(ages.myEvery(age => age > 18));  // false
//-------------------------------------------------------------------
