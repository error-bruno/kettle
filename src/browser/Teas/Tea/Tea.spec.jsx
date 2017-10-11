import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Tea from './Tea.container';

describe('<Tea />', () => {
  const wrapper = shallow(<Tea tea={{ type: 'Black', description: 'Dat Tea' }} />);

  it('should have a single h1 tag', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('the h1 tag should render the correct text', () => {
    expect(wrapper.find('h2').text()).to.equal('Black');
  });

  it('should have a single p tag', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('the p tag should render the correct text', () => {
    expect(wrapper.find('p').text()).to.equal('Dat Tea');
  });
});
