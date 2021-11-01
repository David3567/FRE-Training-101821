const Model = (() => {

    // fetching to do
    const fetchData = () => {
        return fetch('https://jsonplaceholder.typicode.com/todos').then(
            (response) => response.json()            
        );
    };
    console.log(fetchData());

    const addToDo = (todo) => {
        return fetch( 'https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    };

    return {fetchData, addToDo}

})();


const View = ( () => {
    // Usage of class Names
    const domString = {
        todoListContainer: '.main',
        todoListContent: '.todolist__content',
        todoListLiItem: '.todolist__content__item',
        todoListAdd: '.btn-add',
        todoListInput: '.todolist__input',
        deleteBtn: 'btn-del',
        editBtn: 'btn-edit',
        contentTitle: 'todolist__content-item__title'
    }

    const generateTemplate = () => {
        return `<section class="todolist">
                    <header class="todolist__header">
                    <h1 class="todolist__title todolist__row">TodoList</h1>
                    <div class="todolist__row todolist__input-wrap ">
                        <input class="todolist__input" placeholder="Todo..." /> <button class="btn btn-add">Add</button>
                    </div>
                    </header>
                    <ul class="todolist__content">
                    </ul>
                </section>`
    }


    const generateTodoItem = (todo) => {
        const title = todo.title.length > 30 ? todo.title.substring(0, 30) + '...' : todo.title;

        return `<li id="${todo.id}" class="todolist__content__item todolist__row">
                    <span id="todolist__li-item" class="todolist__content-item__title">${title}</span>
                    <button id="todolist__li-edit" class="btn-edit btn">Edit</button>
                    <button id="todolist__li-del" class="btn-del btn">Delete</button>
                </li>`
    }


    const render = (element, template) => {
        template.innerHTML = element;
        console.log(template), "------------";
    }

    return {domString, generateTodoItem, generateTemplate, render}
})();

const AppControler = ( (view, model) => {
    
    let todoListData;

    const init = () => {
        // main container
        const template = document.querySelector(view.domString.todoListContainer);
        console.log(template, "-------");
                // getting the entire section
        const generateTemp = view.generateTemplate()
        view.render(generateTemp, template);
        console.log("template", template)


        fetchInit()
        addNewList()
        deletePost()
        editPost()
    }

    fetchInit = () => {
        model.fetchData().then((data) => {
            todoListData = data;
            console.log("data list", todoListData);
            updateToDoList(data);
            // console.log("working");
        })
    }

    editPost = () => {
        const editClass = document.getElementsByClassName(view.domString.editBtn);
        const parentContent = document.getElementsByClassName('.todolist__li-item');

        function myFun() {
            myVar = setTimeout(callBackFn, 1000)
        }

        function callBackFn () {
            const edit = [...editClass];
            // console.log(edit, "editclass")
            for (let i = 0; i<edit.length; i++) {
                edit[i].addEventListener('click', (e) => {
                    let currentId = e.target.parentElement.id;
                    let parentEl = e.target.parentElement;
                    console.log("currentID", currentId);
                    let editPressed = e.target.id == "todolist__li-edit";
                    let tobe = parentEl.getElementsByClassName(view.domString.contentTitle);

                    myAddedVar = setTimeout(callBackFnsecond, 1000)

                    function callBackFnsecond () {
                        if (editPressed) {
                            let tobeEdited = tobe;
                            console.log("edited", tobeEdited);
                        } 
                        console.log("id of selected", e.target.id);
                    }
                })
            }
        }

        myFun()
    }

    deletePost = (todoListData) => {

        const deleteClass = document.getElementsByClassName(view.domString.deleteBtn);

        function myFun() {
            myVar = setTimeout(callBackFn, 1000)
        }

        function callBackFn () {
            const del = [...deleteClass];
            // const edit = [...editClass];
            // console.log("lirlow", liRow);
            for (let i = 0; i<del.length; i++) {
                del[i].addEventListener('click', (e) => {
                    let currentId = e.target.parentElement.id;
                    console.log("currentID", currentId);
                    let deletePressed = e.target.id == "todolist__li-del";

                    if (deletePressed) {
                        console.log(e.target.id, "target id is")
                        fetch(`https://jsonplaceholder.typicode.com/todos/${currentId}`, {
                            method: 'DELETE',
                        })
                        .then(res => res.json())
                        .then(() => location.reload())
                    } 
                    console.log("id of selected", e.target.id);
                })
            }
        }

        myFun()

    }

    updateToDoList = (data) => {
        // console.log("inside update");
        const joinedData = data.map((todo) => view.generateTodoItem(todo))
        .join('');
        // console.log("joined list", joinedData);
        const parent = document.querySelector(
            view.domString.todoListContent
          );
        // view.render(parent, joinedData);
        parent.innerHTML = joinedData;
    }

    addNewList = () => { 
        const AddBtn = document.querySelector(view.domString.todoListAdd);
        const inputSpot = document.querySelector(view.domString.todoListInput);
        

        AddBtn.addEventListener('click', () => {
            let newId = todoListData.length + 1;
            // console.log(newId, "newId")
            model.addToDo({
                userId: 1,
                id: newId,
                completed: false,
                title: inputSpot.value,
              })
              .then((data) => {
                  todoListData.push(data);
                //   console.log("testing")
                  console.log("data", todoListData);
                  updateToDoList(todoListData);
                  inputSpot.value = ''
                //   console.log("inputspot", inputSpot.value)
              })
        });
    }



    return {init}




}

)(View, Model);

AppControler.init();