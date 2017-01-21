import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import 'normalize.css';
import '../scss/main.scss'
import '../scss/fonts.scss'

import TaskManager from './components/pages/TaskManager';

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
      <Route path="/" component={TaskManager} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
