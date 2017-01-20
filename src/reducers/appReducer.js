import {
  START,
} from '../constants/ActionTypes';

const initialState = {
  menu: {
    visible: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        menu: {
          visible: true,
        },
      };
    default:
      return state;
  }
}

export default appReducer;
