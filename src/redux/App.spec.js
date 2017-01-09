import { expect } from 'chai';
import { Map } from 'immutable';
import appReducer from './App.reducer';

describe('App Tests', () => {
  it('has initial state', () => {
    const nextState = appReducer();
    expect(nextState).to.equal(Map({
      initialized: false
    }));
  });

  it('has initalized the app', () => {
    const action = {
      type: 'INIT'
    };
    const nextState = appReducer(undefined, action);

    expect(nextState).to.equal(Map({
      initialized: true
    }));
  });
});
