import { useState } from 'react';
import { useHistory } from 'react-router';
import s from './SearchMovie.module.css';

function SearchMovie() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleChange = e => {
    setQuery(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    history.push({ ...history.location, search: `?query=${query}` });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search movies'
        className={s.input}
        value={query}
        onChange={handleChange}>
      </input>
      <button type='submit' className={s.button}>Search</button>
    </form>
  );
};

export default SearchMovie;