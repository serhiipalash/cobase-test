import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import 'normalize.css';
import '../scss/main.scss'
import '../scss/fonts.scss'

import App from './components/pages/App';
import SideBar from './components/organisms/SideBar';

import Home from './components/pages/Home';
import Overview from './components/pages/Overview';
import TaskManager from './components/pages/TaskManager';
import Drawings from './components/pages/Drawings';
import Employees from './components/pages/Employees';
import Reports from './components/pages/Reports';

import rootReducer from './reducers';

typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const store = process.env.NODE_ENV !== 'production' ?
  createStoreWithMiddleware(rootReducer, window.devToolsExtension && window.devToolsExtension()) :
  createStoreWithMiddleware(rootReducer);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" components={{ main: Home, sidebar: SideBar }}/>
        <Route path="overview" components={{ main: Overview, sidebar: SideBar }}/>
        <Route path="task-manager" components={{ main: TaskManager, sidebar: SideBar }}/>
        <Route path="drawings" components={{ main: Drawings, sidebar: SideBar }}/>
        <Route path="employees" components={{ main: Employees, sidebar: SideBar }}/>
        <Route path="reports" components={{ main: Reports, sidebar: SideBar }}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
