import { createStore, combineReducers } from 'redux';
import todos from './todos/reducers';

const reduxStore = createStore(combineReducers({ todos }));

export default reduxStore;