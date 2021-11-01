// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json))

function myFetch(url) {
	return new Promise((resolve, reject) => {
		var xhttp = new XMLHttpRequest()
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				resolve({
					json: function () {
						return new Promise((resolve, reject) => {
							resolve(JSON.parse(xhttp.response))
						})
					},
				})
			}
		}
		xhttp.open('GET', url, true)
		xhttp.send()
	})
}

myFetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(json))

function getData(url, options) {
	var xhttp = new XMLHttpRequest()
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			options.success(JSON.parse(xhttp.response))
		}
	}
	xhttp.open(options.method, url, true)
	xhttp.send()
}
// getData('https://jsonplaceholder.typicode.com/todos/1', {
// 	method: 'GET',
// 	success: function (data) {
// 		alert(data)
// 	},
// })
