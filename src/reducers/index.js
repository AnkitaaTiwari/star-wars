import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import peopleListReducer from './peopleListReducer';
 
const rootReducer = combineReducers({
  characterReducer,
  peopleListReducer,
});

export default rootReducer;
