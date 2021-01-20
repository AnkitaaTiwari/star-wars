import { FETCH_PEOPLE_LIST, FETCH_PEOPLE_LIST_SUCCESS, FETCH_PEOPLE_LIST_FAILURE } from '../constants';

const initialState = {
  isLoading: false,
  peopleList: {},
  msg: '',
};

export default function peopleListReducer(state = initialState, action) {
  console.log(action, '**********', state);
  switch(action.type) {
    case FETCH_PEOPLE_LIST: 
      return {
        ...state,
        isLoading: true,
        msg: '',
      }
    case FETCH_PEOPLE_LIST_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        peopleList: action.peopleList,
      }
    case FETCH_PEOPLE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        msg: action.msg,
      }
    default:
      return state;
  }
}