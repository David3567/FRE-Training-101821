// To do list using HTML, CSS & JS only

function addDelBtn(){
    let myList = document.getElementsByTagName("li");
    for (let x = 0; x<myList.length; x++){
        let spanItem = document.createElement("span");
        let closeIcon = document.createTextNode("\u00D7");
        spanItem.className = "close";
        spanItem.appendChild(closeIcon);
        myList[x].appendChild(spanItem);
        // console.log("first one", myList[x]);

    }
    return;
}

addDelBtn()



// Need to loop over the already provided list

function removeItem () {
    myApproved = document.getElementsByClassName("close");
    for (var i = 0; i < myApproved.length; i++) {
        console.log("current", myApproved[i])
        myApproved[i].onclick = function () {
            var val = this.parentElement;
            console.log("parent element", val)
            val.style.display = "none";
        }
    }
    return;
}

removeItem()


// Executing the add button function
// get the event being typed {check error that a string is put in}
// at the point that it becomes successful then list it as the child of the the ul

function myAddFn() {
    var newElement = document.createElement("li");
    var newTask = document.getElementById("userInput").value;
    var spanItem = document.createTextNode(newTask);
    newElement.appendChild(spanItem);


    if (newTask == ''){
        alert ("You Must Write Something")
    } else {
        document.getElementById("listedItems").appendChild(newElement)
    }
    document.getElementById("userInput").value = '';


    // Adding Del button specific to the newly added item
    var close = document.createElement("span");
    var closeIcon = document.createTextNode("\u00D7");
    close.className = "close";
    close.appendChild(closeIcon);
    newElement.appendChild(close);


    removeItem();
    return;

}


