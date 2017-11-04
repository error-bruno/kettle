import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TextInput from './TextInput.react';

describe('<TextInput />', () => {
  it('contains a <label /> component', () => {
    const wrapper = mount(<TextInput />);
    expect(wrapper.find('.label')).to.have.length(1);
  });

  it('contains the correct text', () => {
    const wrapper = mount(<TextInput label="A Label" />);
    expect(wrapper.find('.label').text()).to.equal('A Label:');
  });

  it('contains a <input /> component', () => {
    const wrapper = mount(<TextInput />);
    expect(wrapper.find('.input')).to.have.length(1);
  });
});
