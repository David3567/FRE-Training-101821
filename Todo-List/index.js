let listItems = [];

window.onload = () => {
    const items = JSON.parse(localStorage.getItem("todo-items"));
    if (items) {
        listItems = items;
        listItems.forEach(ele => {
            createListItem(ele);
        })
    }
}

document.querySelector(".search_bar-button-success").addEventListener("click", (e) => {
    const keyword = document.querySelector(".search_bar-input").value.toLowerCase()
    document.querySelector(".list").innerHTML = ""
    listItems.filter(ele => ele.toLowerCase().includes(keyword)).forEach(ele => {
        createListItem(ele)
    })
})

function createListItem(task) {

    let svg = document.createElement("img");
    svg.setAttribute("src", "./minus-solid.svg");
    svg.classList.add("list-item-remove")
    svg.addEventListener("click", () => {
        document.querySelectorAll("detail").forEach(ele => {
            if (ele.childNodes[0].textContent === `• ${task}`) {
                document.querySelector(".list").removeChild(ele);
            }
        })
        listItems = listItems.filter(ele => ele !== task);
        localStorage.setItem("todo-items", JSON.stringify(listItems));
    })
    let title = document.createElement("h2");
    title.textContent = `• ${task}`;
    title.classList.add("list-item-title")

    let todoItem = document.createElement("detail");
    todoItem.appendChild(title);
    todoItem.appendChild(svg);
    document.querySelector(".list").appendChild(todoItem);
}

document.querySelector(".search_bar-button-add_item").addEventListener("click", (e) => {
    let task = prompt("Task Info");
    if (task) { // avoid cases user click on cancel 
        listItems.push(task)
        localStorage.setItem("todo-items", JSON.stringify(listItems));
        createListItem(task);
    }
});
