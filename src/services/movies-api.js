const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "ff262d7f6d96d9744473c2f08ad032b8";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function fetchAPI(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Not found`));
  });
}

export function fetchTrending() {
  return fetchAPI(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function fetchMovies(query) {
  return fetchAPI(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=1&language=en-US`
  );
}

export function fetchMovieId(movieId) {
  return fetchAPI(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
}

export function fetchMovieCast(movieId) {
  return fetchAPI(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&page=1`);
}

export function fetchMovieReviews(movieId) {
  return fetchAPI(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&page=1`);
}
