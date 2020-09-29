import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer'

export function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();