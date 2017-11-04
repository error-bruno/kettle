import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

const req = require.context('../src', true, /story\.js$/)

setDefaults({
  header: false,
  inline: true,
  source: true
});

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
