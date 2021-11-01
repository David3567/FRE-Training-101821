//in this version, i will use an array to store todolist data. with default value
let todolist = [{ name: 'shopping', done: false }]
// -------deal with CRUD data locally
//CRUD with array todolist

function addNewItem_updatetodolist(name) {
	let obj = { name: name, done: false }
	todolist.push(obj)
}
function deleteNewItem_updatetodolist(name) {
	
}
// -----deal with storage ---------
//saveData
//readData
// ------ deal with event ---------
//event for clicking add button

//event handler function that will be called when user click add button
function addItem() {
	//get user's input when user click add button
	let input = document.getElementById('myInput')

	if (input.value === '') {
		alert('empty')
	} else {
		addNewItem_updatetodolist(input.value)
		console.log(todolist)
	}
}

// -------deal with manipulate DOM and render
// initial load 



function addEventListenerForDelete() {
	// Click on a close button to hide the current list item
	var close = document.getElementsByClassName('delete')
	//everytime a new item is added, we will update the eventListenser for delete

	for (let i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			let div = this.parentElement
			div.style.display = 'none'
		}
	}
}

//initialize li to have eventlistener click --- for check
function changeDoingToDone() {
	//when click li, the li will be added a new class
	let todoUl = document.getElementById('todolist')
	todoUl.addEventListener(
		'click',
		function (event) {
			if ((event.target.tagName = 'li')) {
				event.target.classList.add('checked')
			}
		},
		false
	)
}

//deal with li's click -- turn from checked to unchecked, unchecked to checked
function checkOrNot(li) {
	li.classList.add('unchecked')
	//to deal with check event for new li user created
	li.addEventListener('click', function (event) {
		if (event.target.classList.contains('checked')) {
			event.target.classList.replace('checked', 'unchecked')
		} else if (event.target.classList.contains('unchecked')) {
			event.target.classList.replace('unchecked', 'checked')
		}
	})
}
