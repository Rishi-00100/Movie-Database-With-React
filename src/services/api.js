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