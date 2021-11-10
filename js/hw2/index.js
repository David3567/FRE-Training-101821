function foo(){
  for(var i = 0; i < 5; i++){
    setTimeout(()=>{
      console.log(i);
    },i);
  }
}
foo();

// Output of foo() will be:
// 5
// 5
// 5
// 5
// 5
// Why?
//   Every cycle of the for loop will put the setTimeout() call into the event queue. setTimeout() is asynchronous so the for loop will continue running. By the time each call finishes the delay timer and removed from the event queue, the loop counter will be 5 and each call will output the current counter value which is 5.