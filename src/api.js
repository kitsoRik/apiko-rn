const token = "da50ad1d11b0ba194991d37120384288";
const apiUrl = `https://api.themoviedb.org`;

const get = (path, params) => {
  return fetch(
    `${apiUrl}${path}?api_key=${token}${params ? "&" + params : ""}`
  ).then(r => r.json());
};

export const getMovies = async search => {
  let result = await get("/3/search/movie", `query=${search}`);
  return result;
};

export const getMovie = async id => {
  let result = await get(`/3/movie/${id}`);
  return result;
};

export const getMovieRecommendations = async id => {
  let result = await get(`/3/movie/${id}/recommendations`);
  return result;
};
