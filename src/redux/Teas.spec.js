import { expect } from 'chai';
import teasReducer from './Teas.reducer';

const initialTeaState = [{
  id: 1,
  type: 'Oolong',
  description: 'Oolong is a traditional Chinese tea produced through a process including withering the plant under strong sun and oxidation before curling and twisting.'
}, {
  id: 2,
  type: 'Black Tea',
  description: 'Black tea is a type of tea that is more oxidized than oolong, green and white teas. Black tea is generally stronger in flavor than the less oxidized teas. All four types are made from leaves of the shrub Camellia sinensis.'
}];

describe('Teas Reducer Tests', () => {
  it('has initial state', () => {
    const nextState = teasReducer();

    expect(nextState.get('teas')).to.deep.equal(initialTeaState);
  });
});

describe('ADD_TEA', () => {
  it('adds the tea', () => {
    const action = {
      type: 'ADD_TEA',
      payload: {
        id: 3,
        type: 'Green Tea',
        description: 'It is Green'
      }
    };
    const nextState = teasReducer(undefined, action);

    expect(nextState.get('teas')).to.deep.equal([...initialTeaState, action.payload]);
  });
});
