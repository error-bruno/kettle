/* eslint-disable react/jsx-filename-extension */
// The only file we won't use JSX for.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './App/App.container';
import configureStore from '../plumbing/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer name="World" />
  </Provider>,
  document.querySelector('#app')
);
