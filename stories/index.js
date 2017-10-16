import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from '../src/browser/components/Button.container';
import Teas from '../src/browser/Teas/Teas.container';
import Tea from '../src/browser/Teas/Tea/Tea.container';

import configureStore from '../src/plumbing/configureStore';
import { setField } from '../src/redux/redux-fields/fields.actions';

const store = configureStore();

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('default', () => (
    <Button
      clickAction={() => store.dispatch(setField(['test'], 'test'))}
      text="Click Me"
    />
  ))
  .add('disabled', () => (
    <Button
      disabled
      clickAction={action('clicked')}
      text="Can't Click Me"
    />
  ));

storiesOf('Teas', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      { getStory() }
    </Provider>
  ))
  .add('Teas', () => (
    <Teas />
  ))
  .add('Tea', () => (
    <Tea tea={{ type: 'Black', description: 'Here' }} />
  ));
