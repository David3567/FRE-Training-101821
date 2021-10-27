const arr = [1, 2, 3, 4]
console.log('arr: ', arr)

/* Custom Array.prototype.map */

Array.prototype.myMap = function (callbackFn) {
  const mapArr = []

  for (let i = 0; i < this.length; i++) {
    const result = callbackFn(this[i], i, this)

    mapArr.push(result)
  }

  return mapArr
}

const evenMapArr = arr.myMap((x) => x * 2)

console.log('evenMapArr: ', evenMapArr)

/* Custom Array.prototype.filter */

Array.prototype.myFilter = function (callbackFn) {
  const filterArr = []

  for (let i = 0; i < this.length; i++) {
    const result = callbackFn(this[i], i, this)

    if (result) filterArr.push(this[i])
  }
  return filterArr
}

const evenFilterArr = arr.myFilter((x) => x % 2 === 0)

console.log('evenFilterArr: ', evenFilterArr)

/* Custom Array.prototype.reduce */

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue

  for (let i = 0; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i], i, this)
  }

  return accumulator
}

const reduceSum = arr.myReduce((sum, x) => (sum += x), 0)

console.log('reduceSum: ', reduceSum)

/* Custom Array.prototype.every */
// the every method as an array equivalent of the logical AND

Array.prototype.myEvery = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    const result = callbackFn(this[i], i, this)

    // if any value is false, exit the loop
    if (!result) return false
  }

  // else if all values are true, return true
  return true
}

const everyCheck = arr.myEvery((x) => Number.isInteger(x))
console.log('everyCheck: ', everyCheck)

/* Custom Array.prototype.some */
// the some method as an array equivalent of the logical OR

Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    const result = callbackFn(this[i], i, this)

    // if any value is true, return true
    if (result) return true
  }

  // else if all values are false, return false
  return false
}

const someCheck = arr.mySome((x) => Number.isInteger(x))
console.log('someCheck: ', someCheck)
