import { FETCH_CHARACTER, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE } from '../constants';

const initialState = {
  isLoading: false,
  character: {},
  movieList: [],
  msg: '',
};

export default function characterReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTER: 
      return {
        ...state,
        isLoading: true,
        msg: '',
      }
    case FETCH_CHARACTER_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        character: action.character,
        movieList: action.movieList,
      }
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        msg: action.msg,
      }
    default:
      return state;
  }
}