import {
  APP_INIT,
  APP_SHOW_SIDEBAR,
  APP_HIDE_SIDEBAR,
} from '../constants/ActionTypes';

const initialState = {
  isRetinaDisplay: false,
  isSidebarVisible: true,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_INIT:
      return {
        ...state,
        ...action.state,
      };
    case APP_HIDE_SIDEBAR:
      return {
        ...state,
        isSidebarVisible: false,
      };
    case APP_SHOW_SIDEBAR:
      return {
        ...state,
        isSidebarVisible: true,
      };
    default:
      return state;
  }
}

export default appReducer;
