let arr = [2, 3, 4, 5, 6];

// Array.prototype.filter

Array.prototype.mockFilter = function (fn) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            arr.push(this[i])
        }
    }
    return arr;
}
console.log("======mockFilter===============")
console.log("Output:", arr.mockFilter(ele => ele > 2));
console.log("Original Array:", arr);

// Array.prototype.map

Array.prototype.mockMap = function (fn) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        const result = fn(this[i])
        if (result) {
            arr.push(result)
        }
    }
    return arr;
}
console.log("======mockMap==================")
console.log("Output:", arr.mockMap(ele => { if (ele > 2) { return ele * 2 } }));
console.log("Original Array:", arr);

// Array.prototype.reduce

Array.prototype.mockReduce = function (fn, total) {
    let sum = total ? total : 0;
    for (let i = 0; i < this.length; i++) {
        sum = fn(sum, this[i])
    }
    return sum;
}
console.log("======mockReduce================")
console.log("Output:", arr.mockReduce((total, element) => total += element, 15))
console.log("Original Array:", arr);

// Array.prototype.some

Array.prototype.mockSome = function (fn) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            arr.push(this[i])
        }
    }
    return arr.length !== 0;
}

console.log("======mockSome==================")
console.log("Output:", arr.mockSome(ele => ele % 2 === 0));
console.log("Original Array:", arr);

// Array.prototype.every

Array.prototype.mockEvery = function (fn) {
    for (let i = 0; i < this.length; i++) {
        if (!fn(this[i])) {
            return false;
        }
    }
    return true;
}

console.log("======mockEvery==================")
console.log("Output:", arr.mockEvery(ele => ele > 0));
console.log("Output:", arr.mockEvery(ele => ele % 2 === 0));
console.log("Original Array:", arr);