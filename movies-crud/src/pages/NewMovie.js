import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie } from '../actions';
import { Button } from 'react-bootstrap';
import '../styles/NewMovie.css'

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
    <div className="new-container">
      <h2>Adicione um novo filme</h2>
      <form className="new-form" onSubmit={ handleSubmit }>
        { error && <p>{ error }</p> }
        <h5 className="new-title">Caminho da imagem:</h5>
        <input
          name="image"
          type="text"
          value={ image }
          onChange={ handleChange }
        />
        <h5 className="new-title">Title:</h5>
        <input
          id="movie_title"
          name="title"
          type="text"
          value={ title }
          label="Movie Title"
          onChange={ handleChange }
        />
        <h5 className="new-title">Sinopse:</h5>
        <input
          id="movie_storyline"
          name="storyline"
          type="text"
          value={ storyline }
          label="Movie StoryLine"
          onChange={ handleChange }
        />
        <h5 className="new-title">Gênero:</h5>
        <input
          id="movie_genre"
          name="genre"
          type="text"
          value={ genre }
          label="Movie Genre"
          onChange={ handleChange }
        />
        <h5 className="new-title">Rating:</h5>
        <input
          id="movie_rating"
          name="rating"
          type="number"
          value={ rating }
          label="Movie Rating"
          onChange={ handleChange }
        />
        <div className="new-btn-container">
          <Button
            type="submit"
            className="new-btn1"
          >
          ADICIONAR
          </Button>
          <Button
            className="new-btn2"
            onClick={ () => history.push('/') }
          >
          VOLTAR
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewMovie;
