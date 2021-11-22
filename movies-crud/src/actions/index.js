import * as types from './actionTypes';
import axios from 'axios';

const getMovies = (movies) => ({
  type: types.GET_MOVIES,
  payload: movies,
});

const getMovie = (movie) => ({
  type: types.GET_MOVIE,
  payload: movie,
});

const movieDeleted = () => ({
  type: types.DELETE_MOVIE,
});

const movieAdded = () => ({
  type: types.ADD_MOVIE,
});

export const loadMovies = () => {
  return function (dispatch) {
    axios
      .get('http://localhost:3001/movies')
      .then((response) => {
        dispatch(getMovies(response.data));
      }).catch((error) => console.log(error));
  }
}

export const loadMovie = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/movies/${id}`)
      .then((response) => {
        dispatch(getMovie(response.data));
      }).catch((error) => console.log(error));
  }
}

export const deleteMovie = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/movies/${id}`)
      .then((response) => {
        console.log(response);
        dispatch(movieDeleted());
        dispatch(loadMovies());
      }).catch((error) => console.log(error));
  }
}

export const addMovie = (movie) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/movies`, movie)
      .then((response) => {
        console.log(response);
        dispatch(movieAdded());
        dispatch(loadMovies());
      }).catch((error) => console.log(error));
  }
}
