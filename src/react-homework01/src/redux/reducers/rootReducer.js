import {combineReducers} from 'redux';
import cardsState from './cards';
import authState from './auth';
import userData from './user';

export default combineReducers({
  cardsState,
  authState,
  userData
})
