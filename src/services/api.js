/*
const API_KEY = "1d962dce";
const BASE_URL = "https://www.omdbapi.com";

const popularMovieTitles = ["Inception", "Interstellar", "Avengers", "The Dark Knight", "Titanic"];

export const getPoplarMovies = async () => {
  const results = await Promise.all(
    popularMovieTitles.map(title =>
      fetch(`${BASE_URL}/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
        .then(res => res.json())
    )
  );
  return results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.Search || [];
};
*/


const API_KEY = "89598f7802e7a538142451e39dd39b56";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPoplarMovies = async () => {
  const response = await fetch(`
    ${BASE_URL}/movie/popular?api_key=${API_KEY}
  `);
  const data = await response.json();
  return data.results;
}

export const searchMovies = async (query) => {
  const response = await fetch(`
    ${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}
  `);
  const data = await response.json();
  return data.results;
}
