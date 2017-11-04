import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button.react';

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
