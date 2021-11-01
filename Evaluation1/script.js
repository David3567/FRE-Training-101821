const View = (() => {
    const domString = {
        albumContainer: '.main',
        albumResults: '.results',
        albumCounts: '.counts',
        searchQuery: '.inputField',
    }

    const render = (template, element) => {
        element.innerHTML = template;
    };

    const albumCount = (count, queryString) => {
        return queryString === '' ? `<div>Search Albums by ArtistName:</div>` : `<div>${count} results for "${queryString}"</div>`
    }

    const albumCard = (album) => {
        return `
        <div class="card">
            <img src="${album.artworkUrl100}">
            <div>${album.collectionName}</div>
        </div>`
    }

    const initTemplate = () => {
        return `
            <div class="counts">
                <div>Search Albums by ArtistName:</div>
            </div>
            <hr>
            <div class="results"></div>
        `
    }

    return { domString, render, albumCount, albumCard, initTemplate }
})();


const Model = (() => {
    const getAlbums = (artistName) => {
        return fetchJsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`)
            .then(res => res.json())
    }

    return { getAlbums }
})();


const Controller = ((model, view) => {
    const init = () => {
        const initTemplate = view.initTemplate()
        const initElement = document.querySelector(
            view.domString.albumContainer
        );
        view.render(initTemplate, initElement)
        search()
    };

    const updateAlbumResults = (data) => {
        let cardTemplate = data.map(album => view.albumCard(album)).join('');
        const albumLists = document.querySelector(
            view.domString.albumResults
        );
        view.render(cardTemplate, albumLists);
    };

    const updateAlbumCounts = (counts, query) => {
        let countTemplate = view.albumCount(counts, query);
        const albumCounts = document.querySelector(
            view.domString.albumCounts
        );
        view.render(countTemplate, albumCounts);
    };

    const fetchData = (query) => {
        model.getAlbums(query).then((data) => {
            updateAlbumResults(data.results)
            updateAlbumCounts(data.resultCount, query)
        });
    };

    const search = () => {
        const searchInput = document.querySelector(view.domString.searchQuery)
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === "Enter") {
                fetchData(searchInput.value)
            }
        });
    };

    return {
        init,
    };
})(Model, View);

Controller.init();