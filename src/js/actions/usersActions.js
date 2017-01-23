import {
  USERS_LOAD_ALL,
} from '../constants/ActionTypes';

import image1 from '../../../static/img/User1@2x.png';
import image2 from '../../../static/img/User2@2x.png';
import image3 from '../../../static/img/User3@2x.png';
import image4 from '../../../static/img/User4@2x.png';


export const loadAll = () => {
  /* Hard code start */
  const users = [
    {
      id: 1,
      name: 'John Dow',
      createdAt: Date.now() - 7*24*60*60*1000,
      image: image1,
    },
    {
      id: 2,
      name: 'Patric Johnson',
      createdAt: Date.now() - 70*24*60*60*1000,
      image: image2,
    },
    {
      id: 3,
      name: 'Thomas MacPherson',
      createdAt: Date.now() - 17*24*60*60*1000,
      image: image3,
    },
    {
      id: 4,
      name: 'Rita Melo',
      createdAt: Date.now() - 37*24*60*60*1000,
      image: image4,
    },
  ];
  /* Hard code end */

  return (dispatch) => {
    dispatch({ type: USERS_LOAD_ALL, users });
  };
};
