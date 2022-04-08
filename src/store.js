import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action.type);
  return next(action);
};
const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, crashReporter, thunk))
);

export default store;
