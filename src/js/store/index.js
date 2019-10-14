/*
js/store/index.js
*/
import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import createRootReducer from '../reducers/index'

export const history = createHashHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), 
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )

  return store
}