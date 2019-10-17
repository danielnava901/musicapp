import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore, {history} from './js/store/index';
import RouterHandler from './js/RouterHandler.jsx';
import { ConnectedRouter } from 'connected-react-router'

/**
 * INITIAL STATE APP
 */
const initialState = {
  articles: [],
  user: {
    token: null, 
    is_logged: false,
    info: null
  }
};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouterHandler/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);