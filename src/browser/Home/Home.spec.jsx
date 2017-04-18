import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import HomeContainer from './Home.container';
import HomeComponent from './Home.react';
import configureStore from '../../plumbing/configureStore';

const store = configureStore();

describe('<HomeContainer />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  );

  it('should render correctly', () =>
    expect(wrapper.find(HomeComponent).find('p.init').text()).to.equal('App is not inited')
  );

  it('can init the app', () => {
    store.dispatch({
      type: 'INIT'
    });
    expect(wrapper.find(HomeComponent).find('p.init').text()).to.equal('App is inited');
  });
});
