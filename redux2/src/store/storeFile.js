import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducers/mainReducer';

let store = createStore(reducer, applyMiddleware(promiseMiddleware))

export default store