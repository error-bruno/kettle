import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Tea from './Tea.container';

describe('<Tea />', () => {
  it('should have a single h1 tag', () => {
    const wrapper = shallow(<Tea />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
