
const baseUrl = `https://www.omdbapi.com`;

export const getMovie = async (query) => {
    const url = `${baseUrl}/?s=${query}&apikey=89bbf049`;
    let result = await fetch(url);
    let data = await result.json();
    return data.Search ?? data.Error;
}


export const getMovieDetails = async (imdbID) => {
    const url = `${baseUrl}?i=${imdbID}&apikey=89bbf049`;
    let result = await fetch(url);
    let data = await result.json();
    return data
}







