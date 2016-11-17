import { Map } from 'immutable';

const initialState = Map({
  initialized: false
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'INIT':
      return state.set('initialized', true);
    default:
      return state;
  }
}
