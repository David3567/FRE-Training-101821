const { Model } = require('Model.js')
const { View } = require('View.js')

const AppController = ((model, view) => {
    // let todolistdata;

    const init = () => {
        const initTemplate = view.initTodoListTemplate();
        const initElement = document.querySelector(
            view.domString.todoListContainer
        );
        view.render(initTemplate, initElement);
        // setUpevent();
        fetchData();
    };

    // const updateTodoListItems = (data) => {
    //     let todoListTemple = data
    //         .map((todo) => view.generateTodoItem(todo))
    //         .join('');
    //     const todoListElement = document.querySelector(
    //         view.domString.todoListContent
    //     );
    //     view.render(todoListTemple, todoListElement);
    // };

    const fetchData = () => {
        model.fetchTodos().then((data) => {
            todolistdata = data;
            updateTodoListItems(todolistdata);
        });
    };

    // const setUpevent = () => {
    //     const btnAdd = document.querySelector(view.domString.todoListAdd);
    //     const todolistInput = document.querySelector(
    //         view.domString.todoListInput
    //     );
    //     btnAdd.addEventListener('click', () => {
    //         model
    //             .addTodo({
    //                 userId: 1,
    //                 completed: false,
    //                 title: todolistInput.value,
    //             })
    //             .then((data) => {
    //                 todolistdata.push(data);
    //                 updateTodoListItems(todolistdata);
    //             });
    //     });
    // };

    return {
        init,
    };
})(Model, View);