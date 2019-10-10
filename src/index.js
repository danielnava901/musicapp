import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './js/store/index';
import RouterHandler from './js/RouterHandler.jsx';

render(
  <Provider store={store}>
    <RouterHandler/>
  </Provider>,
  document.getElementById("root")
);