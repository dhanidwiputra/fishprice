// import { createStore } from 'redux';
// import rootReducer from './reducers';

// export default createStore(rootReducer);

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}