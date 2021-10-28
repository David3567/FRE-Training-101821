let value = document.getElementById('one');
// value.innerHTML = "hello"
console.log(value);

// addind delete buttons to all tasks listed
let myList = document.getElementsByTagName("li");
for (let x = 0; x<myList.length; x++){
    let spanItem = document.createElement("span");
    let closeIcon = document.createTextNode("\u00D7");
    spanItem.className = "close";
    spanItem.appendChild(closeIcon);
    myList[x].appendChild(spanItem);
    console.log("first one", myList[x]);

}


// Need to loop over the already provided list
myApproved = document.getElementsByClassName("close");
// console.log("myApproved", myApproved)
for (var i = 0; i < myApproved.length; i++) {
    console.log("current", myApproved[i])
    myApproved[i].onclick = function () {
        var val = this.parentElement;
        console.log("parent element", val)
        val.style.display = "none";
    }
}




// console.log("total Items", myList.length);
// console.log("myList", myList);


// function myFunction() {
//     document.getElementsById("one").innerHTML = "changed"
// }