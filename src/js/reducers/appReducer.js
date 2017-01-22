import {
  APP_INIT,
} from '../constants/ActionTypes';

const initialState = {
  isRetinaDisplay: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_INIT:
      return {
        ...state,
        ...action.state,
      };
    default:
      return state;
  }
}

export default appReducer;
