import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';

import Button from '../src/browser/components/Button.react';
import Teas from '../src/browser/scenes/Teas/Teas.container';
import Tea from '../src/browser/scenes/Teas/components/Tea.react';

import configureStore from '../src/plumbing/configureStore';

const store = configureStore();

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('default', withInfo('This is the default button')(() => (
    <Button
      clickAction={action('clicked')}
      text="Click Me"
    />
  )))
  .add('disabled', withInfo('This is a disabled button')(() => (
    <Button
      disabled
      clickAction={action('clicked')}
      text="Can't Click Me"
    />
  )));

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
