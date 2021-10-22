console.log("hello");

let h1element = document.getElementById("h1")
console.log(h1element);



function foo(input) {
    input = 7;
}

let c = 10;
console.log(c);

foo(c);
console.log(c);



function change() {
    h1element.innerHTML = "Just Changed";
    console.log(h1element.innerHTML);
}

change();