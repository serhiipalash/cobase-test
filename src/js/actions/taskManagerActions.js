import {
  TASK_MANAGER_LOAD_ALL,
  TASK_MANAGER_SET_ACTIVE,
  TASK_MANAGER_UPDATE_TASK
} from '../constants/ActionTypes';

import { v4 } from 'node-uuid';
import image1 from '../../../static/img/1@2x.png';
import image2 from '../../../static/img/2@2x.png';
import image3 from '../../../static/img/3@2x.png';
import image4 from '../../../static/img/4@2x.png';
import image5 from '../../../static/img/5@2x.png';


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
      employees: [1, 2, 3],
      tags: ['Thirdfloor', 'bathroom', 'tilework'],
      images: [image1, image2, image3, image4, image5],
      checklist: [
        {
          id: 1,
          name: 'Install water isolation',
          done: true,
          progressSegment: 0.7,

        },
        {
          id: 2,
          name: 'Prepare for tiling',
          done: false,
          progressSegment: 0.3,
        },
      ],
    },
    {
      id: v4(),
      name: 'Fix bedroom floor',
      description: 'Bedroom floor needs some fixing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam magni, reprehenderit qui doloribus deserunt eveniet possimus vitae harum libero ducimus quam nobis nulla expedita delectus.',
      completed: false,
      paused: false,
      inProcess: true,
      createdAt: Date.now() - 7*24*60*60*1000,
      lastUpdate: Date.now() - 15*60*1000,
      employees: [1, 3],
      tags: ['Firstfloor', 'bedroom', 'insulation', 'parquet'],
      images: [image2, image3, image4],
      checklist: [
        {
          id: 1,
          name: 'Fix insulation',
          done: false,
          progressSegment: 0.4,
        },
        {
          id: 2,
          name: 'Lay parquet',
          done: false,
          progressSegment: 0.4,
        },
        {
          id: 3,
          name: 'Put a tile',
          done: true,
          progressSegment: 0.2,
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

export const updateTask = (task) => ({ type: TASK_MANAGER_UPDATE_TASK, task });
