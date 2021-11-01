const View = (() => {
  const domString = {
    todoListContainer: '.main',
    todoListContent: '.todolist__content',
    todoListAdd: '.btn-add',
    todoListInput: '.todolist__input',
  };
  const render = (template, element) => {
    element.innerHTML = template;
  };

  const generateTodoItem = (todo) => {
    const title =
      todo.title.length > 30
        ? todo.title.substring(0, 30) + '...'
        : todo.title;
    return `<li class="todolist__content-item todolist__row">
              <span class="todolist__content-item__title">${title}</span
              ><button class="btn">Delete</button>
            </li>`;
  };

  const initTodoListTemplate = () => {
    return `<section class="todolist">
              <header class="todolist__header">
                <h1 class="todolist__title todolist__row">TodoList</h1>
                <div class="todolist__row todolist__input-wrap ">
                  <input class="todolist__input" placeholder="Todo..." /> <button class="btn btn-add">Add</button>
                </div>
              </header>
              <ul class="todolist__content">
              </ul>
            </section>`;
  };

  return { domString, initTodoListTemplate, render, generateTodoItem };
})();

const Model = (() => {
  // Fetching data from the api
  const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(
      (response) => response.json()
    );
    
  };


  const addTodo = (todo) => {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  };
  // console.log("fetchToDos", fetchTodos();

  return { fetchTodos, addTodo };
})();

const AppController = ((model, view) => {
  let todolistdata;

  const init = () => {
    // return the entire main section of page
    const initTemplate = view.initTodoListTemplate();
    //  .main class name
    const initElement = document.querySelector(
      view.domString.todoListContainer
    );
    // main class innerHTML (initElement) is set to the entire main section of the page (init)
    view.render(initTemplate, initElement);
    // 
    setUpevent();
    fetchData();
  };

  const updateTodoListItems = (data) => {
    // mapping data into the li element and joining each li
    let todoListTemple = data.map((todo) => view.generateTodoItem(todo))
    .join('');
    // todolist element assigned to the ul template
    const todoListElement = document.querySelector(
      view.domString.todoListContent
    );
    // the ul's (todoListElement) inner HTML is assigned to the joined li (todoListTemple)
    view.render(todoListTemple, todoListElement);
  };

 

  // Fetching the data
  const fetchData = () => {
    // accessing data from the api
    model.fetchTodos().then((data) => {
      console.log("array data", data);
      // todoListdata is set to the fetched data
      todolistdata = data;
      // using the fun below to map over the data
      updateTodoListItems(todolistdata);
    });
    // console.log("fetchData")
  };

  const setUpevent = () => {
    // Add input (new to do)button Class name
    const btnAdd = document.querySelector(view.domString.todoListAdd);
    // input class name
    const todolistInput = document.querySelector(
      view.domString.todoListInput
    );
    //  adding event listner to the button class name
    // upon clicking execute a post method to the data using POST HTTP
    btnAdd.addEventListener('click', () => {
      model
      // Converiting the added todolist into a POST JSON format 
        .addTodo({
          userId: 1,
          completed: false,
          title: todolistInput.value,
        })
        // then we push the added todo to the list 
        .then((data) => {
          todolistdata.push(data);
          // the update the list item to show the new result at the bottom
          updateTodoListItems(todolistdata);
        });
    });
  };

  return {
    init,
  };
})(Model, View);

AppController.init();




// // import fetch from 'node-fetch'
// // globalThis.fetch = fetch

// console.log ('Starting');
// let image;

// fetch('coffee.jpg').then((response) => {
//   console.log('It worked :)')
//   return response.blob();
// }).then((myBlob) => {
//   let objectURL = URL.createObjectURL(myBlob);
//   image = document.createElement('img');
//   image.src = objectURL;
//   document.body.appendChild(image);
// }).catch((error) => {
//   console.log('There has been a problem with your fetch operation: ' + error.message);
// });

// console.log ('All done!');

// // fetch()


// console.log("registering click handler");

// let butt = document.getElementById("btn")

// butt.addEventListener('click', () => {
//   console.log("get click");
// });

// console.log("all done");

// let mySetTimeout = setTimeout(myFun, 2000);
// function myFun(){
//   console.log('hello');
// }

// console.log(mySetTimeout);



// const s = new Date().getSeconds();
// console.log("s", s);

// setTimeout(function() {
//   // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 5000)

// while (true) {
//   if (new Date().getSeconds() - s >= 2) {
//     console.log("Good, looped for 2 seconds")
//     break;
//   }
// }