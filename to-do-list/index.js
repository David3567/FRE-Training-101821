const arr = []

class Entry {
    constructor(todo, id) {
      this.todo = todo;
      this.id = id;
    }
  }

function clicked(e){
    e.preventDefault()
    let info = document.getElementById('todo-input').value
    const newEntry = new Entry(info, Math.floor(Math.random() * 1000));
    arr.push(newEntry)
    console.log(arr)
    document.getElementById('todo-input').value = ''
    addTodo(newEntry.id, newEntry.todo)
}

function addTodo(id, todo){
    let table = document.getElementById("display");
     let row = table.insertRow(arr.length);
     let cell1 = row.insertCell(0);
     cell1.innerHTML =  '<div id='+id +'><tr> ' + todo + '</tr><button id="second" ' +
     ' onclick="deleteTodo('+ id +')">X</button></tr></div>';
}

function deleteTodo(arg){
    let func = String(arg)
    let myobj = document.getElementById(func);
    myobj.remove();
}

async function testAPI(){
    let data
    await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => addApiData(json))
  .catch((error) => console.log(error))
}
function addApiData(bop){
    console.log(bop)
    for(let i=0;i<bop.length;i++){
        addTodo(bop[i].id, bop[i].title)
   }
}
testAPI()