import * as types from './actionTypes';
import axios from 'axios';

const getMovies = (movies) => ({
  type: types.GET_MOVIES,
  payload: movies,
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
