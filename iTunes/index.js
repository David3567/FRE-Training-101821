let endPoint =
  "https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200";

const Model = (() => {
  // fetching to do
  const fetchData = (name) => {
    return fetchJsonp(
      "https://itunes.apple.com/search?term=${" +
        name +
        "}&media=music&entity=album&attribute=artistTerm&limit=200",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    ).then((response) => response.json());
  };

  return { fetchData };
})();

const View = (() => {
  // Usage of class Names

  const domString = {
    albumListContainer: ".main",
    musicListContent: ".collection__list",
    artistSearch: ".artist__search",
    artistName: ".iTunes__input",
    searchBtn: ".artist__search__button",
  };
  const render = (element, template) => {
    template.innerHTML = element;
  };

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
                </section>`;
  };

  const generateTodoItem = (todo) => {
    const title = todo.artistName;

    return `<li class="collection__song">
                    <div>
                        <img src="${todo.artworkUrl100}" alt="">
                        <p> ${todo.collectionCensoredName} </p>
                    </div>
                </li>`;
  };

  return { domString, generateTodoItem, generateTemplate, render };
})();

const AppControler = ((view, model) => {
  let todoListData;

  const init = () => {
    // main container
    const template = document.querySelector(view.domString.albumListContainer);
    const generateTemp = view.generateTemplate();
    view.render(generateTemp, template);
    const searchNow = document.querySelector(view.domString.searchBtn);
    const val = document.querySelector(view.domString.artistName);
    searchNow.addEventListener("click", () => {
      getAlbums(val);
    });
  };

  getAlbums = (val) => {
    const newValue = val.value;
    model.fetchData(newValue).then((data) => {
      updateToDoList(data);
    });
  };

  updateToDoList = (data) => {
    dataArr = data.results;

    function myFun() {
      myVar = setTimeout(callBackFn, 0);
    }

    function callBackFn() {
      view.generateTemplate(data.resultCount);
      const joinedData = dataArr
        .map((todo) => view.generateTodoItem(todo))
        .join("");
      const parent = document.querySelector(view.domString.musicListContent);
      parent.innerHTML = joinedData;
    }

    myFun();
  };

  return { init };
})(View, Model);

AppControler.init();
