import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { IMAGE_URL } from "../../services/movies-api";
import "./MoviesList.modules.css";

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <NavLink
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
              className="link"
            >
              <img
                className="image"
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
                width="300"
                height="450"
              />
              <p>{movie.title}</p>
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
