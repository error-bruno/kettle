import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Teas from './Teas.container';
import Tea from './components/Tea.react';

import configureStore from '../../../../src/plumbing/configureStore';

const store = configureStore();

storiesOf('Teas', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      { getStory() }
    </Provider>
  ))
  .add('Teas', withInfo('This is the Teas iterator')(() => (
    <Teas />
  )))
  .add('Tea', withInfo('This is the tea component')(() => (
    <Tea tea={{ type: 'Black', description: 'Here' }} />
  )));
