//filter
Array.prototype.filter = function (cb) {
    const arr = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            arr.push(this[i])
        }
    }
    return arr
}

//map
Array.prototype.map = function (cb) {
    const arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i]))
    }
    return arr
}

//reduce
Array.prototype.reduce = function (cb, val) {
    let arr = this
    if (val === undefined) {
        val = arr[0]
        arr = arr.slice(1)
    }

    let res = val
    for (let i = 0; i < this.length; i++) {
        res = cb(res, arr[i])
    }
    return res
}

//some
Array.prototype.some = function (cb) {
    let res = false
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            res = true
            break
        }
    }
    return res
}

//every
Array.prototype.every = function (cb) {
    let res = true
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i])) {
            res = false;
            break
        }
    }
    return res
}