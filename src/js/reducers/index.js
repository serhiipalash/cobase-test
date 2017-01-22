import { combineReducers } from 'redux';

import appReducer from './appReducer';
import userReducer from './userReducer';
import taskManagerReducer from './taskManagerReducer';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  taskManager: taskManagerReducer,
});

export default rootReducer;
