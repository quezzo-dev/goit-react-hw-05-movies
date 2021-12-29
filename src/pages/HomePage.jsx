import { useState, useEffect } from "react";
import * as moviesAPI from "../services/movies-api";
import MoviesList from "../components/MoviesList";

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI
      .fetchTrending()
      .then(({ results }) => setMovies(results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Trending title</h1>
      <MoviesList movies={movies} />
    </>
  );
}

export default HomePage;
