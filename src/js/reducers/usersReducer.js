import {
  USERS_LOAD_ALL,
} from '../constants/ActionTypes';

const initialState = {
  usersList: {
    loading: false,
    users: {},
  },
};

function taskManagerReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOAD_ALL:
      return {
        ...state,
        usersList: {
          ...state.usersList,
          users: action.users.reduce((out, user) => {
            out[user.id] = user;
            return out;
          }, {}),
        },
      };
    default:
      return state;
  }
}

export default taskManagerReducer;
