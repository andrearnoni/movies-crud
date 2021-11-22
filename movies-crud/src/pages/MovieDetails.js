import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovie, deleteMovie } from '../actions/index';

function MovieDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movie } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(loadMovie(id));
  }, [dispatch, id]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  }

  return (
    <div>
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ movie.image } />
        <p>{ `Title: ${movie.title}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to={ `/movie/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => handleDelete(movie.id) }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    </div>
  );
}

export default MovieDetails;
