import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Teas from './Teas.container';

describe('<Teas />', () => {
  it('should have a single h1 tag', () => {
    const wrapper = shallow(<Teas />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
