import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TeasContainer from './Teas.container';
import configureStore from '../../../plumbing/configureStore';

const store = configureStore();

describe('<TeasContainer />', () => {
  const wrapper = mount((
    <Provider store={store}>
      <TeasContainer />
    </Provider>
  ));

  it('should have a single h1 tag', () => {
    expect(wrapper.find(TeasContainer).find('h1')).to.have.length(1);
  });

  it('should have a two Tea tags', () => {
    expect(wrapper.find(TeasContainer).find('Tea')).to.have.length(2);
  });
});
