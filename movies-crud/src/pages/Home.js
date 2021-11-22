import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../actions/index';
import '../styles/Home.css';

function Home() {
  let dispatch = useDispatch();
  const { movies } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch])

  return (
    <div className="movie-container">
      <h1 className="movie-title">Klever Flix</h1>
      <div className="movie-list">
        {movies && movies.map((movie, index) => (
          <div key={ index } className="movie-card">
            <img className="movie-card-image" alt="Movie Cover" src={ movie.image } />
            <div className="movie-card-body">
              <h4 className="movie-card-title">{ movie.title }</h4>
              <p className="movie-card-storyline">{ movie.storyline }</p>
            </div>
            <Link to={ `/movie/${movie.id}` }>VER DETALHES</Link>
          </div>
        ))}
      </div>
      <Link className="linklist" to="/movie/new">ADICIONAR CARD</Link>
    </div>
  );
}

export default Home;
