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
    default:
      return state;
    }
}

export default movieReducer;