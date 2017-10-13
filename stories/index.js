import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Teas from '../src/browser/Teas/Teas.container';

import configureStore from '../src/plumbing/configureStore';

const store = configureStore();

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Teas', module)
  .add('default', () => (
    <Provider store={store}>
      <Teas />
    </Provider>
  ));
