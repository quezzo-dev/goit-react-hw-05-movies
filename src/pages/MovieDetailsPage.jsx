import { lazy, Suspense, useState, useEffect } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import * as moviesAPI from "../services/movies-api";
import MovieCard from "../components/MovieCard";

const Cast = lazy(() =>
  import("../components/Cast" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("../components/Reviews" /* webpackChunkName: "Reviews" */)
);

function MovieDetailsPage() {
  const { path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI
      .fetchMovieId(movieId)
      .then(setMovie)
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <>
      {movie && <MovieCard movie={movie} />}

      <hr />

      <Suspense fallback={<h2>Loading in movie card...</h2>}>
        <Switch>
          <Route exact path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route exact path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default MovieDetailsPage;
