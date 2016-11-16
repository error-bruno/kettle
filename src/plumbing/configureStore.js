import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
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

// In future, make sure we only apply middleware to dev
const logger = createLogger({
  collapsed: true,
  diff: true,
  // Convert immutable to JSON.
  stateTransformer: state => JSON.parse(JSON.stringify(state))
});

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
