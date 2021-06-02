import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [];
middleware.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') middleware.push(createLogger());

const createAppStore = compose(applyMiddleware(...middleware))(createStore);
/* eslint-disable no-underscore-dangle */
const store = createAppStore(combineReducers({}));
sagaMiddleware.run(saga);

export default () => store;
