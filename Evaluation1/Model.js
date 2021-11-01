const Model = (() => {
    const getAlbums = (artistName) => {
        return fetchJsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`)
            .then(res => res.json())
            .then(json => console.log(json))
    }

    return { getAlbums }
})();

export default Model;