import { combineReducers } from 'redux';
import tasks from './tasklist';
import errorhandler from './errorhandler';

export default combineReducers({ tasks, errorhandler });