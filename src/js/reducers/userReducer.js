import {
  USER_LOGGEDIN,
} from '../constants/ActionTypes';

const initialState = null;

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGEDIN:
      return action.user;
    default:
      return state;
  }
}

export default userReducer;
