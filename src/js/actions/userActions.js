import {
  USER_LOGGEDIN,
} from '../constants/ActionTypes';

export const loggedin = (user) => ({ type: USER_LOGGEDIN, user });
