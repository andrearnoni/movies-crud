import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleMovie, updateMovie } from '../actions';
import { Button } from 'react-bootstrap';
import '../styles/EditMovie.css';

function EditMovie() {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    image: '',
    title: '',
    storyline: '',
    genre: '',
    rating: '',
  });

  const { id } = useParams();
  const { movie } = useSelector((state) => state.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const { image, title, storyline, genre, rating } = state;

  useEffect(() => {
    dispatch(getSingleMovie(id))
  }, [dispatch, id]);

  useEffect(() => {
    if (movie) {
      setState({ ...movie });
    }
  }, [movie])

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
      dispatch(updateMovie(state, id));
      history.push('/');
      setError('');
    }
  }

  return (
    <div className="edit-container">
      <h2>Edite o filme</h2>
      <form className="edit-form" onSubmit={ handleSubmit }>
        { error && <p>{ error }</p> }
        <h5 className="edit-title">Caminho da imagem:</h5>
        <input
          id="movie_image"
          name="image"
          type="text"
          value={ image }
          label="Movie Image"
          onChange={ handleChange }
        />
        <h5 className="edit-title">Title:</h5>
        <input
          id="movie_title"
          name="title"
          type="text"
          value={ title }
          label="Movie Title"
          onChange={ handleChange }
        />
        <h5 className="edit-title">Sinopse:</h5>
        <input
          id="movie_storyline"
          name="storyline"
          type="text"
          value={ storyline }
          label="Movie StoryLine"
          onChange={ handleChange }
        />
        <h5 className="edit-title">Gênero:</h5>
        <input
          id="movie_genre"
          name="genre"
          type="text"
          value={ genre }
          label="Movie Genre"
          onChange={ handleChange }
        />
        <h5 className="edit-title">Rating:</h5>
        <input
          id="movie_rating"
          name="rating"
          type="number"
          value={ rating }
          label="Movie Rating"
          onChange={ handleChange }
        />
        <div className="edit-btn-container">
          <Button
            className="edit-btn1"
            type="submit"
          >
          EDITAR
          </Button>
          <Button
            className="edit-btn2"
            onClick={ () => history.push('/') }
          >
          VOLTAR
          </Button>
        </div>
      </form>
    </div>
  );
}

export default  EditMovie;
