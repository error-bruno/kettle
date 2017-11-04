import { Map } from 'immutable';
import {
  INIT
} from './App.actions';

const initialState = Map({
  auth: false,
  initialized: false
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INIT:
      return state.set('initialized', true);
    default:
      return state;
  }
}
