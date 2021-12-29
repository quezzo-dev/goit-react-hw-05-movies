import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/movies-api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieAPI
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
     <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>'We don`t have any Reviews for this movie.'</p>
      )}
    </div>
  );
};

export default Reviews;