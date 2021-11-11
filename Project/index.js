let elements = [];

const model = (() => {
    const url = "http://localhost:5000/api/items";
    const sendHttpRequest = (method, url, data) => {
        return fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: data ? { "Content-Type": "application/json" } : {}
        }).then(response => {
            return response.json();
        })
    }

    const getAllData = () => {
        return sendHttpRequest("GET", url)
            .then(response => {
                return response;
            })
    }

    const addNewData = (data) => {
        console.log(data);
        return sendHttpRequest("POST", url, data)
            .then(response => {
                return response
            })
    }
    return { getAllData, addNewData }
})();

const AppController = ((model) => {
    const init = () => {
        setUpEvent();
        fetchData();
    }
    const fetchData = () => {
        model.getAllData().then(data => {
            elements = data;
            updateElements(elements);
        })
    }

    const updateElements = (data) => {
        document.querySelector(".content-list").innerHTML = "";
        data.forEach(element => {
            const content = document.createElement('span');
            content.textContent = element.item_name;

            const button = document.createElement('button');
            button.classList.add("btn", "item-btn-remove");
            button.textContent = "✖";
            button.setAttribute("aria-lable", "Delete");
            button.addEventListener("click", deleteElement)

            const item = document.createElement('li');
            item.classList.add("content-list-item");
            item.appendChild(content);
            item.appendChild(button);
            document.querySelector(".content-list").appendChild(item);
        })
    }
    const deleteElement = (e) => {
        console.log(e.target.parentNode)
    }

    const setUpEvent = () => {
        const addBtn = document.querySelector(".box-btn-add");
        addBtn.addEventListener("click", () => {
            const input = document.querySelector(".box-input_field").value;
            model.addNewData({ item_name: input })
                .then(newData => {
                    elements.push(newData); // update the elements array
                    updateElements(elements);
                    // What needs to be done
                    //maybe push the new data to the elements arary and invoke the update Elements again
                })
        })
    }
    return { init }

})(model)

AppController.init();

