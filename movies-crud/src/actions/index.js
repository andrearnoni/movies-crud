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
