//filter
Array.prototype.myFilter=function(cb, context){
    let arr=[];
    for(let i=0;i<this.length; i++){
        if(cb.call(context, this[i], i)){
            arr.push(this[i]);
        }
    }
    return arr;
    
}

//map
Array.prototype.myMap=function(cb){
    let arr=[];
    for(let i=0; i<this.length; i++){
        arr.push(cb.call(this, this[i], i));
    }
    return arr;
}

arr=[1,2,3,6,4];

//reduce
Array.prototype.myReduce = function (cb, init) {
      if (init === undefined && !this.length) throw new Error("error");
      let acc = init;
      let index = 0;
      if (init === undefined) {
        acc = this[0];
        index = 1;
      }
      for (; index < this.length; index++) {
        acc = cb.call(this, acc, this[index]);
      }
      return acc;
    };
let arr11 = [1, 2, 3, 4, 3, 1];


//some
Array.prototype.mySome = function (cb, init) {
    for(let i=0; i<this.length;i++){
    if(i in this && cb.call(init, this[i], i, this)){
        return true;
    }
    }
    return false;

};


//every
Array.prototype.myEvery = function (cb) {
 for(let i=0; i<this.length;i++){
    if(cb.call(this[i], i, this)){
        return true;
    }
    }
    return false;
}
