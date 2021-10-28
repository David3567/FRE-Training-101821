// Array Methods created using prototyping
// Filter
// Map
// Reduce
// Some
// Every

arr = [1, 2, 3, 4, 5]

// Prototype MyFilter
Array.prototype.myFilter = function (callBackFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        // console.log("this", this);
        let checking = callBackFn(this[i], i, this);
        // console.log("my filter", checking)
        if(checking) {
            result.push(this[i])
        }
    }
    return `myFilter ${result}`;
}

console.log(arr.myFilter(x => x > 2))


// My Map Prototype
Array.prototype.myMap = function (callbackFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        let processing = callbackFn(this[i], i, this);
        result.push(processing);
    }
    return `myMap ${result}`;
}

console.log(arr.myMap(x => x*2));


// Prototype MyReducer 

Array.prototype.myReducer = function (callbackFn, currentVal) {
    let value = currentVal ? currentVal : 0 ;
    for (let i = 0; i<this.length;i++){
        value = callbackFn(value, this[i], i, this);
    }
    return `myReducer ${value}`;
}

const res = (previousVal, currentVal) => previousVal + currentVal;
console.log(arr.myReducer(res))


// Prototype Mysome

Array.prototype.mySome = function (callbackFn) {
    for (let i = 0; i<this.length;i++) {
        // console.log("this", this);
        let processing = callbackFn(this[i], i, this);
        // console.log("processing", processing);
        if (processing) return true;
    }
    return `mySome ${false}`
}

console.log("mySome", arr.mySome(x => x>2))



// Prototype MyEvery 

Array.prototype.myEvery = function (callbackFn) {
    for (let i = 0; i<this.length; i++){
        let processing = callbackFn(this[i], i, this)
        if (!processing) return false
    }
    return `myEvery ${true}`;
}

console.log(arr.myEvery(x => x>1))



// class Person {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//         this.showName = function () {
//             console.log(this.name);
//         }
//     }
// }


// const a  = new Person ('yakob', 23);
// a.showName();