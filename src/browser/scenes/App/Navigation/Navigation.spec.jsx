import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navigation from './Navigation.container';

describe('<Navigation />', () => {
  it('should have a single ul', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('ul')).to.have.length(1);
  });

  it('should have a two li', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('li')).to.have.length(2);
  });
});
