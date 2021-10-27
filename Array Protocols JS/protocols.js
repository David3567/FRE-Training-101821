// Array.prototype.filter
Array.prototype.myFilter = function( callbackFn ){
    let res = [];
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i))
        res.push(this[i]);
    }

    return res;
}

// Array.prototype.map
Array.prototype.myMap = function( callbackFn ){
    let res = [];
    for(let i = 0; i < this.length; i++) {
        res.push(callbackFn(this[i], i));
    }

    return res;
}

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


// Array.prototype.some
Array.prototype.mySome = function (callbackFn ) {
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i)) {
            return true;
        }
    }
    return false;
}

// Array.prototype.every
Array.prototype.myEvery = function (callbackFn ) {
    for(let i = 0; i < this.length; i++) {
        if(!callbackFn(this[i], i)) {
            return false;
        }
    }
    return true;
}
