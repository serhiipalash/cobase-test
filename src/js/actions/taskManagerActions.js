import {
  TASK_MANAGER_LOAD_ALL,
  TASK_MANAGER_SET_ACTIVE
} from '../constants/ActionTypes';

import { v4 } from 'node-uuid';

export const loadAll = () => {
  /* Hard code start */
  const tasks = [
    {
      id: v4(),
      name: 'Fix bathroom walls',
      description: 'Bathroom walls needs some fixing. Descriptions can be longer than only one sentence. Descriptions can be longer than only one sentence. Descriptions can be longer than only one sentence.',
      completed: false,
      paused: false,
      inProcess: true,
      createdAt: Date.now() - 7*24*60*60*1000,
      lastUpdate: Date.now() - 22*60*1000,
      employees: [],
      tags: [],
      images: [],
      checklist: [
        {
          id: 1,
          name: 'Install water isolation',
          done: true,
        },
        {
          id: 2,
          name: 'Prepare for tiling',
          done: false,
        },
      ],
    },
    {
      id: v4(),
      name: 'Fix bedroom floor',
      description: 'Bedroom floor needs some fixing. Descriptions can be longer than only one sentence. Descriptions can be longer than only one sentence. Descriptions can be longer than only one sentence.',
      completed: false,
      paused: false,
      inProcess: true,
      createdAt: Date.now() - 7*24*60*60*1000,
      lastUpdate: Date.now() - 15*60*1000,
      employees: [],
      tags: [],
      images: [],
      checklist: [
        {
          id: 1,
          name: 'Fix insulation',
          done: false,
        },
        {
          id: 2,
          name: 'Lay parquet',
          done: false,
        },
      ],
    },
  ];
  /* Hard code end */

  return (dispatch) => {
    dispatch({ type: TASK_MANAGER_LOAD_ALL, tasks });
    dispatch(setActive(tasks[0].id));
  };
};

export const setActive = (id) => ({ type: TASK_MANAGER_SET_ACTIVE, id });
