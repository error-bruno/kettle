import { expect } from 'chai';
import teasReducer from './Teas.reducer';

describe('Teas Reducer Tests', () => {
  it('has initial state', () => {
    const nextState = teasReducer();

    expect(nextState.get('teas')).to.deep.equal((
      [{
        type: 'Oolong',
        description: 'Oolong is a traditional Chinese tea produced through a process including withering the plant under strong sun and oxidation before curling and twisting.'
      }, {
        type: 'Black Tea',
        description: 'Black tea is a type of tea that is more oxidized than oolong, green and white teas. Black tea is generally stronger in flavor than the less oxidized teas. All four types are made from leaves of the shrub Camellia sinensis.'
      }]
    ));
  });
});
