import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

configure({ adapter: new Adapter() });

chai.use(chaiImmutable);

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);
