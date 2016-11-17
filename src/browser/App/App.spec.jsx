import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AppContainer from './App.container';
import AppComponent from './App.react';
import configureStore from '../../plumbing/configureStore';

const store = configureStore(false);

describe('<AppContainer />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );

  it('should render correctly', () =>
    expect(wrapper.find(AppComponent).find('p').text()).to.equal('App is not inited')
  );

  it('can init the app', () => {
    store.dispatch({
      type: 'INIT'
    });
    expect(wrapper.find(AppComponent).find('p').text()).to.equal('App is inited');
  });
});
