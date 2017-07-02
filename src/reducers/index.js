import { combineReducers } from 'redux';
import roomsList from './roomsList';
import online from './online';

export default combineReducers({
  roomsList,
  online
})
