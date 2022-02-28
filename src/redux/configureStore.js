import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets from './reducers/rockets';

const reducer = combineReducers({
  rockets,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

window.store = store;

export default store;
