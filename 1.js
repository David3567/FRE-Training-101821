const arr = [{ name: 1 }, { name: 2 }]

let result = arr.map((item) => {
	item.name = 'changed'
})

console.log(arr)
console.log(result)
