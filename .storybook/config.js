import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  header: false,
  inline: true,
  source: true
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
