import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovie, deleteMovie } from '../actions/index';
import { Button } from 'react-bootstrap';
import '../styles/MovieDetails.css';

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
    <div className="details-container">
      <div className="details-sub-container">
        <img className="details-img" alt="Movie Cover" src={ movie.image } />
        <p>{ `Título: ${movie.title}` }</p>
        <p>{ `Sinopse: ${movie.storyline}` }</p>
        <p>{ `Genero: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <div>
          <Link to={ `/movie/${movie.id}/edit` }>
            <Button className="details-btn">EDITAR</Button>
          </Link>
          <Link to="/" onClick={ () => handleDelete(movie.id) }>
            <Button className="details-btn-delete" variant="danger">DELETAR</Button>
          </Link>
          <Link to="/">
            <Button className="details-btn">VOLTAR</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
