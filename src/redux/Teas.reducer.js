import { Map } from 'immutable';
import {
  ADD_TEA
} from './Teas.actions';

const initialState = Map({
  teas: [{
    type: 'Oolong',
    description: 'Oolong is a traditional Chinese tea produced through a process including withering the plant under strong sun and oxidation before curling and twisting.'
  }, {
    type: 'Black Tea',
    description: 'Black tea is a type of tea that is more oxidized than oolong, green and white teas. Black tea is generally stronger in flavor than the less oxidized teas. All four types are made from leaves of the shrub Camellia sinensis.'
  }]
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TEA: {
      console.log('here')
      return state
        .updateIn(['teas'], () => action.payload);
    }

    default:
      return state;
  }
}
