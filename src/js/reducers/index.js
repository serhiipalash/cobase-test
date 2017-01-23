import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import appReducer from './appReducer';
import userReducer from './userReducer';
import taskManagerReducer from './taskManagerReducer';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  taskManager: taskManagerReducer,
  routing: routerReducer,
});

export default rootReducer;
