let endPoint = 'https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200';

const Model = (() => {

    // fetching to do
    const fetchData = (name) => {
        console.log(name, "named")
        return fetchJsonp('https://itunes.apple.com/search?term=${'+name+'}&media=music&entity=album&attribute=artistTerm&limit=200', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(
            (response) => response.json()            
        );       
    };
    // console.log(fetchData(), "inside model");

    return {fetchData}

})();

console.log("end ponit", endPoint);


const View = ( () => {
    // Usage of class Names

    const domString = {
        albumListContainer: '.main',
        musicListContent: '.collection__list',
        artistSearch: '.artist__search',
        artistName: '.iTunes__input',
        searchBtn: '.artist__search__button'
    }
    const render = (element, template) => {
        template.innerHTML = element;
        console.log(template, "------");
    }

    const generateTemplate = (count) => {
        return `<section class="iTunes">
                    <header class="iTunes__header">
                        <input class="iTunes__input" type="text" placeholder="Artist's Name">
                        <button class="artist__search__button btn"><i class="fas fa-search"></i></button>
                    </header>

                    <section class="albums__found">
                        <div class="album__result">${count} results found </div>
                        <ul class="collection__list">
                        </ul>
                    </section>   
                </section>`
    }

    const generateTodoItem = (todo) => {

        const title = todo.results.artistName;
        con

        return `<li class="collection__song">
                    <div>
                        <img src="" alt="">
                        <p> ${title} </p>
                    </div>
                </li>`
    }

    // const generateTodoItem = (todo) => {
    //     const title = todo.title.length > 30 ? todo.title.substring(0, 30) + '...' : todo.title;

    //     return `<li id="${todo.id}" class="todolist__content__item todolist__row">
    //                 <span id="todolist__li-item" class="todolist__content-item__title">${title}</span>
    //                 <button id="todolist__li-edit" class="btn-edit btn">Edit</button>
    //                 <button id="todolist__li-del" class="btn-del btn">Delete</button>
    //             </li>`
    // }
    return {domString, generateTodoItem, generateTemplate, render}
})();



const AppControler = ( (view, model) => {
    
    let todoListData;

    const init = () => {
        // main container
        const template = document.querySelector(view.domString.albumListContainer);
        console.log("main before", template);
        // getting the entire section
        const generateTemp = view.generateTemplate()
        view.render(generateTemp, template)
        // console.log("Template", generateTemp)
        // template.innerHTML = generateTemp;
        // console.log("main after", template);
        const searchNow = document.querySelector(view.domString.searchBtn);
        console.log(searchNow, 'butotonnnn');
        const val = document.querySelector(view.domString.artistName);
        console.log("Value------", val.value);
        searchNow.addEventListener('click', () => {
            getAlbums(val)
        });

        // view.render(generateTemp, template);

        // fetchInit()
        // getAlbums()
        // deletePost()
        // editPost()
    }

    // fetchInit = () => {
    //     model.fetchData().then((data) => {
    //         todoListData = data;
    //         console.log("data list", todoListData);
    //         // updateToDoList(data);
    //         // console.log("working");
    //     })
    // }

    getAlbums = (val) => {

        
        const newValue = val.value;
            console.log("new Val", newValue);
            model.fetchData(newValue).then((data) => {
                console.log(data, "dafdasfadsfdfafdsafsd")
                updateToDoList(data);
            })
        // console.log("name", value);

        
    }

    updateToDoList = (data) => {
        // console.log("inside update");

        function myFun () {
            myVar = setTimeout(callBackFn, 0)
        }

        function callBackFn() {
            view.generateTemplate(data.resultCount)
            const joinedData = data.map((todo) => view.generateTodoItem(todo))
            .join('');
            const parent = document.querySelector(
                view.domString.todoListContent
              );
            // view.render(parent, joinedData);
            parent.innerHTML = joinedData;
        }

        myFun()
        console.log(data, "Dataa")
        
        // console.log("joined list", joinedData);
        
    }

    // c = (data) => {
    //     // console.log("inside update");
    //     console.log(";;;;;;;")
    //     const joinedData = data.map((todo) => view.generateTodoItem(todo))
    //     .join('');
    //     // console.log("joined list", joinedData);
    //     const parent = document.querySelector(
    //         view.domString.musicListContent
    //       );
    //     // view.render(parent, joinedData);
    //     parent.innerHTML = joinedData;
    // }



    // addNewList = () => { 
    //     const AddBtn = document.querySelector(view.domString.todoListAdd);
    //     const inputSpot = document.querySelector(view.domString.todoListInput);
        

    //     AddBtn.addEventListener('click', () => {
    //         let newId = todoListData.length + 1;
    //         // console.log(newId, "newId")
    //         model.addToDo({
    //             userId: 1,
    //             id: newId,
    //             completed: false,
    //             title: inputSpot.value,
    //           })
    //           .then((data) => {
    //               todoListData.push(data);
    //             //   console.log("testing")
    //               console.log("data", todoListData);
    //               updateToDoList(todoListData);
    //               inputSpot.value = ''
    //             //   console.log("inputspot", inputSpot.value)
    //           })
    //     });
    // }



  

 


    return {init}




}

)(View, Model);

AppControler.init();
