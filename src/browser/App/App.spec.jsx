import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Route } from 'react-router-dom';
import App from './App.container';
import Navigation from '../Navigation/Navigation.container';

describe('<App />', () => {
  it('contains a <Navigation /> component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Navigation)).to.have.length(1);
  });

  it('contains two <Route /> components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Route)).to.have.length(2);
  });
});
