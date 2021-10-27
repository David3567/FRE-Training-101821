//Array.prototype.filter
Array.prototype.myfilter = function(callbackFn) {
    let temp = [];

    
    for(let i = 0; i<this.length; i++)
    {
        if(callbackFn(this[i],i,this))
        temp.push(this[i]);
    }

    return temp;
}

//Array.prototype.map
Array.prototype.mymap = function(callbackFn){
    let temp = [];

    for(let i=0; i<this.length; i++)
    {
        temp.push(callbackFn(this[i],i,this));
    }

    return temp;
}

//Array.prototype.reduce
Array.prototype.myreduce = function(callbackFn, init){
    let previous, current_index;

    if(init === undefined)
    {
        previous = this[0];
        current_index = 1;

       
    }
    else{
        previous = init;
       current_index = 0;
    }

    for(let i = current_index; i<this.length; i++)
    {
        previous = callbackFn(previous, this[i], i, this);
    }

    return previous;
}


//Array.prototype.some
Array.prototype.mysome = function(callbackFn, thisArg){
    
    if(this.length === 0 )
        return false;

    for(let i = 0; i<this.length; i++)
    {
        if(callbackFn(this[i]))
            return true;
    }

    return false;
}


//Array.prototype.every
Array.prototype.myevery = function(callbackFn, thisArg){
    let init = true;
    if(this.length===0)
        return true;

    for(let i=0; i<this.length; i++)
    {
        if(!callbackFn(this[i]))
         init = false;
    }

    return init;
}





