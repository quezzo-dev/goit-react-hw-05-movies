import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import * as moviesAPI from "../services/movies-api";
import SearchMovie from "../components/SearchMovie";
import MoviesList from "../components/MoviesList";

function MoviesPage() {
  const [movies, setMovies] = useState(null);

  const location = useLocation();
  const parsedQueryString = queryString.parse(location.search); // = query: "police"
  const query = parsedQueryString.query; // = police
  // .then(({ results }) => setMovies(results))
  useEffect(() => {
    if (query) {
      moviesAPI
        .fetchMovies(query)
        .then(({ results }) => {
          if (results.length === 0) {
            alert("No any answer");
            return;
          }
          setMovies(results);
        })
        .catch((error) => console.log(error));
    }
  }, [query]);

  useEffect(() => {
    if (location.search === "") {
      setMovies([]);
    }
  }, [location]);

  return (
    <>
      <SearchMovie />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}

export default MoviesPage;
