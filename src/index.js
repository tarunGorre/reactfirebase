import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxSaga from 'redux-saga';
import reducers from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
const store = createStore(reducers, {}, applyMiddleware(reduxSaga));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();