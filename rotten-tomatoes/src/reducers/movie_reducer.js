import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE, DETAILS_REQUEST, DETAILS_SUCCESS } from '../actions';

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: false,
  isSuccess: false,
  movies: [],
  movie: {}
};

const movie_reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        movies: action.movies
      };
    }

    case DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        movie: action.movie
      };
    }

    case LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
        isSuccess: false
      };
    }

    default:
      return state;
  }
}

export default movie_reducer;
