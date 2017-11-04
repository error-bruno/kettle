import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Button from './Button.react';

describe('<Button />', () => {
  it('contains the correct text component', () => {
    const wrapper = mount(<Button>A Button</Button>);
    expect(wrapper.find(Button).text()).to.equal('A Button');
  });
});

