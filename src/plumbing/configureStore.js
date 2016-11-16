import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../redux/App.reducer';

const promiseMiddleware = ({ dispatch }) => next => (action) => {
  const { type, payload: promise } = action;
  const isPromise = promise && typeof promise.then === 'function';
  if (!isPromise) return next(action);
  const createAction = (suffix, payload) => ({
    type: `${type}_${suffix}`, meta: { action }, payload
  });
  next(createAction('START'));
  const onFulfilled = (value) => {
    dispatch(createAction('SUCCESS', value));
    return value;
  };
  const onRejected = (error) => {
    dispatch(createAction('ERROR', error));
    throw error;
  };
  return promise.then(onFulfilled, onRejected);
};

function logger({ getState }) {
  return next => (action) => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
}

const middlewares = [
  thunk,
  promiseMiddleware,
  logger
];

export default function configureStore() {
  return createStore(
    appReducer,
    applyMiddleware(...middlewares),
  );
}
