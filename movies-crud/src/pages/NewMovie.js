import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie } from '../actions';

function NewMovie() {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    image: '',
    title: '',
    storyline: '',
    genre: '',
    rating: '',
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const { image, title, storyline, genre, rating } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image === '' || title === '' || storyline === '' || genre === '' || rating === '') {
      setError('Todos os campos são requeridos!');
    } else {
      dispatch(addMovie(state));
      history.push('/');
      setError('');
    }
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <h2>Adicione um novo filme</h2>
        { error && <p>{ error }</p> }
        <input
          id="movie_image"
          name="image"
          type="text"
          value={ image }
          label="Movie Image"
          onChange={ handleChange }
        />
        <input
          id="movie_title"
          name="title"
          type="text"
          value={ title }
          label="Movie Title"
          onChange={ handleChange }
        />
        <input
          id="movie_storyline"
          name="storyline"
          type="text"
          value={ storyline }
          label="Movie StoryLine"
          onChange={ handleChange }
        />
        <input
          id="movie_genre"
          name="genre"
          type="text"
          value={ genre }
          label="Movie Genre"
          onChange={ handleChange }
        />
        <input
          id="movie_rating"
          name="rating"
          type="number"
          value={ rating }
          label="Movie Rating"
          onChange={ handleChange }
        />
        <button
          type="submit"
        >
        ADICIONAR
        </button>
        <button
          onClick={ () => history.push('/') }
        >
        VOLTAR
        </button>
      </form>
    </div>
  );
}

export default NewMovie;
