//event handler function that will be called when user click add button
function addItem() {
	//get user's input when user click add button
	let input = document.getElementById('myInput')

	if (input.value === '') {
		alert('empty')
	} else {
		//create a new li
		let li = document.createElement('li')
		let t = document.createTextNode(input.value)
		let deleteSpan = document.createElement('span')
		let txt = document.createTextNode('\u00D7')
		deleteSpan.appendChild(txt)
		deleteSpan.className = 'delete'
		li.appendChild(t)
		li.appendChild(deleteSpan)
		document.getElementById('todolist').appendChild(li)

		//when a new item is added, we update the eventListener for all delete span
		addEventListenerForDelete()
		//when a new li is added, set its checked/check and deal with check/uncheck
		checkOrNot(li)
	}
}

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
