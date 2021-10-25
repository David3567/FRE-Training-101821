// NODE, Javascript, EcmaScript(ES5, ES6, ES7...)
// EcmaScript = Sytanx standard
// Javacirpt =  EcmaScript + webAPI
// NODE = EcmaScript + NODEAPI

// primative type
// let num =5; // number

// console.log(typeof num)
// let str = 'abc';
// str[0] = 'x';
// console.log(str[0])
// console.log(typeof str)
// let b = true;
// console.log(typeof b)
// let und = undefined;
// console.log(typeof und)
// let n = null;
// console.log(typeof n);

// let c = 10;
// let d = c;
// d = 5;
// console.log('d',d) // 5
// foo(c);

// console.log("c",c) // 10

// function foo(input){
//     input = 7;
//     console.log("input",input) // 7
// }
// foo.a =5;
// console.log(foo.a);

/// object data type : object | function
// function foo(){

// }
// console.log(typeof foo);
// let obj = {}
// console.log(typeof obj);
// let arr = []
// console.log(typeof arr);

// let obj = {name:'patrick'}

// foo(obj);
// console.log(obj) // {name:'patrick'}
// function foo(input){
//     input = {name:'changed'}
//     console.log(input) // {name:'changed'}
// }

// deepcopy, shallow copy
// class key in ES6 and constructor function in ES5

/// coersion | == vs ===
// const res = 1 + undefined;
// const res= "1" - 3;
// console.log(res)

// console.log("2" === 2);
// console.log("2" == 2);
// const a = {name:'patrick'};
// const b = {name:'patrick'};
// console.log(a == b)
// console.log(a === b)

// const obj = {name:'patrick'}
// const obj2 = new Object({name:'patrick'})
// console.log(obj2,obj)

// class | prototype
// // ES6
// class Person {
//   constructor(name, age) {
//     this.pname = name;
//     this.age = age;
//     // this.showName = function () {
//     //   console.log(`I am ${this.pname}`);
//     // };
//   }
//   showName(){
//       console.log(`I am ${this.pname}`)
//   }
// }

// function Person(name,age){
//     this.pname = name;
//     this.age = age;
//     this.showName = function(){
//       console.log(`I am ${this.pname}`)

//     }
// }
// Person.prototype.showName = function(){
//   console.log(`I am ${this.pname}`)
// }

// const p = new Person('patrick', 18);
// const p2 = new Person('patrick', 18);
// const p3 = new Person('patrick', 18);

// console.log(p.showName === p2.showName)
// console.log(p.showName);
//  p.showName();
// p.toString = 5;
// console.log(p)
// console.log(p.toString)


//console.log("res",p3.showName(p2.showName()));
// function foo(){
//   let a = 5;
//   a++;
//   function foo2(input){
//     console.log('hello')
//     return input
//   }
//   return foo2("hello");
// }
// console.log(res)

//  function getUser(){
//    return {
//      name:'patrick',
//      hello:"welcome"
//    }
//  }

//  console.log(getUser().hello)

// function foo(){
//   console.log('hello')
// }
// function foo(msg,msg2){
//   console.log(arguments)
//   console.log(msg,msg2) /// output
//   return 'patrick'
// }

// foo(undefined,undefined,"hello",()=>{});

// let arr = [1,2,3];
// console.log(arr instanceof Array );