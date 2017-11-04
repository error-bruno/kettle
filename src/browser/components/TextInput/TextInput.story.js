import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import TextInput from './TextInput.react';


storiesOf('TextInput', module)
  .add('default', withInfo('This is the default button')(() => (
    <TextInput
      name="input-name"
      label="This shows up as the label"
      type="text"
    />
  )));

