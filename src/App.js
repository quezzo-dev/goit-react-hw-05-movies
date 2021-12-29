import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import Container from "./components/Container";
import NavBar from "./components/NavBar/NavBar";
const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);

function App() {
  return (
    <Container>
      <NavBar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" exact />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
