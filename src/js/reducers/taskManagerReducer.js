import {
  TASK_MANAGER_LOAD_ALL,
  TASK_MANAGER_SET_ACTIVE,
} from '../constants/ActionTypes';

const initialState = {
  activeTaskId: null,
  tasksList: {
    loading: false,
    tasks: {},
  },
};

function taskManagerReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_MANAGER_LOAD_ALL:
      return {
        ...state,
        tasksList: {
          ...state.tasksList,
          tasks: action.tasks.reduce((out, task) => {
            out[task.id] = task;
            return out;
          }, {}),
        },
      };
    case TASK_MANAGER_SET_ACTIVE:
      return {
        ...state,
        activeTaskId: action.id,
      };
    default:
      return state;
  }
}

export default taskManagerReducer;
