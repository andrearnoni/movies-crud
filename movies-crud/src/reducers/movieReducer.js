import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  movies: [],
  movie: {},
  loading: true,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case types.GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case types.DELETE_MOVIE:  
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
    }
}

export default movieReducer;