import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets from './reducers/rockets';
import missionReducer from './missions/missions';

const reducer = combineReducers({
  rockets, missionReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

window.store = store;

export default store;
