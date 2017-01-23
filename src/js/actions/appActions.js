import {
  APP_INIT,
  APP_SHOW_SIDEBAR,
  APP_HIDE_SIDEBAR,
} from '../constants/ActionTypes';

export const init = (state) => ({ type: APP_INIT, state });

export const hideSidebar = () => ({ type: APP_HIDE_SIDEBAR });

export const showSidebar = () => ({ type: APP_SHOW_SIDEBAR });
