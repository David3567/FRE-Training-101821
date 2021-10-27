let testArray = [15, 2, 60, 45, 24];


// array filter function
Array.prototype.myFilter = function (callback) {
    let filtered = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            filtered.push(this[i])
        }
    }
    return filtered
}


//array map function
Array.prototype.myMap = function (callback) {
    let mapped = []
    for (let i = 0; i < this.length; i++) {
        mapped.push(callback(this[i]))
    }
    return mapped
}

//some array function
Array.prototype.mySome = function (callback) {
    let bool = false
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            bool = !bool
            break
        }
    }
    return bool
}

//every array function
Array.prototype.myEvery = function (callback) {
    let bool = true
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            bool = !bool
            break
        }
    }
    return bool
}


console.log(testArray.myFilter(age => (age >= 18)));
console.log(testArray.myMap(num => num*2));
console.log(testArray.mySome(age => age >= 18));  
console.log(testArray.myEvery(age => age > 18));