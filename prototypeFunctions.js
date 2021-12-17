//I will recreate various prototype functions that belong to the Array class

let arr = [0,1,2,3,4,5,6,7,8,9]
/* 
Array.prototype.filter
    The filter() method creates a new array with all elements
    that pass the test implemented by the provided function
*/
Array.prototype.myFilter = function(fn){
    let newArr = []
    for(let i = 0; i<this.length; i++){
        if (fn(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr
}
console.log(`DOWN BELOW IS MY CUSTOME FILTER FUNCTION`)
const testFilter = arr.myFilter(num => num > 6)
console.log(testFilter)
console.log(`\n`)

/*
Array.prototype.map
    The map() method (not to be confused with the data structure) creates
    a new array populated with the results of calling a provided function 
    on every element in the calling array
*/
Array.prototype.myMap = function(fn){
    let newArr = []
    for (let i of this){
        newArr.push(fn(this[i]))
    }
    return newArr
}
console.log(`DOWN BELOW IS MY CUSTOME MAP FUNCTION`)
const testMap = arr.myMap(num => num * 2 )
console.log(testMap)
console.log(`\n`)

/*
Array.prototype.some
    The some() method tests whether at least one element in the array
    passes the test implemented by the provided function. It returns true
    if, in the array, it finds an element for which the provided function
    returns true; otherwise it returns false. it doesn't modify the array
*/
Array.prototype.mySome = function(fn){
    for(let i of this){
        if(fn(i)){
            console.log(`from here`)
            return true
        }
    }
    return false
}
console.log(`DOWN BELOW IS MY CUSTOME SOME FUNCTION`)
const testSome = arr.mySome(num => num < 10 )
console.log(testSome)
console.log(`\n`)

/*
Array.prototype.every
    The every() method tests whether all elements in the array pass the 
    test implemented by the provided function. It returns a Boolean value
*/
Array.prototype.myEvery = function(fn){
    for(let i of this){
        if(!(fn(i))){
            return false
        }
    }
    return true
}
console.log(`DOWN BELOW IS MY CUSTOME SOME FUNCTION`)
const testEvery = arr.myEvery(num => num < -2)
console.log(testEvery)
console.log(`\n`)

/* 
Array.prototype.reduce
    The reduce() method executes a user-supplied "reducer" callback
    function on each element of the array, passing in the return value
    from the calculation on the preceding element. The final result of 
    running the reducer across all elements of the array is a single value
*/
Array.prototype.myReduce = function(fn){
    let newArr = []
    for(let i of this){
        newArr.push(fn(i))
    }
}
//comeback for the reduce function

// Array.prototype.forEach
// Array.prototype.keys
// Array.prototype.entries