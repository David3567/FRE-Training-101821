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

    const albumCard = (album) => {
        return `<li class="todolist__content-item todolist__row">
  <span class="todolist__content-item__title">${title}</span
  ><button class="btn">Delete</button>
</li>`;
    };

    return { domString, render, albumCard };
})();