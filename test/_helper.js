import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { jsdom } from 'jsdom';

const exposedProperties = ['window', 'navigator', 'document'];

chai.use(chaiImmutable);

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
