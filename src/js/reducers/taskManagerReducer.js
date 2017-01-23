import {
  TASK_MANAGER_LOAD_ALL,
  TASK_MANAGER_SET_ACTIVE,
  TASK_MANAGER_UPDATE_TASK,
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
    case TASK_MANAGER_UPDATE_TASK:
      return {
        ...state,
        tasksList: {
          ...state.tasksList,
          tasks: {
            ...state.tasksList.tasks,
            [action.task.id]: {
              ...state.tasksList.tasks[action.task.id],
              ...action.task,
              employees: action.task.employees,
              tags: action.task.tags,
              images: action.task.images,
              checklist: action.task.checklist,
            },
          },
        },
      };
    default:
      return state;
  }
}

export default taskManagerReducer;
