let arr = [1,3,5,10,20,30];

// 1-- Array.prototype.myFilter

Array.prototype.myFilter = function(callbackfn){
    let myFilterResult = [];
    for(let i = 0; i < this.length; i++){
        if(callbackfn(this[i],i,this)){
            myFilterResult.push(this[i]);
        }
    }
    return myFilterResult;
}

let getUnderTen = arr.myFilter((item)=> item < 10);
console.log('Array.prototype.myfilter(Nums under 10):',getUnderTen);

// 2-- Array.prototype.myReduce

Array.prototype.myReduce = function(callbackfn, initialValue){
    let myReduceResult = 0;
    if(initialValue === undefined){
        for(let i = 0; i < this.length; i++){
            myReduceResult = callbackfn(myReduceResult,this[i],i,this);
        } 
    }
    return myReduceResult;
}

let sum = arr.myReduce((previousValue, currentValue)=> previousValue+currentValue);
console.log('Array.prototype.myReduce(Sum):', sum);

// 3-- Array.prototype.myMap

Array.prototype.myMap = function(callbackfn){
    let myMapResult = [];
    for(let i = 0; i < this.length; i++){
        myMapResult.push(callbackfn(this[i],i,this));
    }
    return myMapResult;
}

let addFive = arr.myMap((item)=> item+5);
console.log('Array.prototype.myMap(Add 5):', addFive);

// 4-- Array.prototype.mySome

Array.prototype.mySome = function(callbackfn){
    for(let i = 0; i < this.length; i++){
        if(callbackfn(this[i],i,this)){
            return true;
        }
    }
    return false;
}

let hasOddNum = arr.mySome((item)=> item%2 === 1);
console.log('Array.prototype.mySome(Has Odd Number):', hasOddNum);

// 5-- Array.prototype.myEvery

Array.prototype.myEvery = function(callbackfn){
    for(let i = 0; i < this.length; i++){
        if(!callbackfn(this[i],i,this)){
            return false;
        }
    }
    return true;
}

let isLessThanForty = arr.myEvery((item)=> item < 40);
console.log('Array.prototype.myEvery(Is less than 40?):', isLessThanForty);