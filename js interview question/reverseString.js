//using string and array methods
const reverseString = (inputString) => {
    return inputString.split("").reverse().join("");
}

//for loop
const reverseString2 = (inputString) => {
    let reversed = "";
    for (let i = inputString.length - 1; i >= 0; i--) {

        reversed += inputString[i];
    }

    return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString2("hello"));