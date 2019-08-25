import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import loginoutReducer from './loginoutReducer'


export default combineReducers({
  events: eventReducer,
  logs: loginoutReducer
})