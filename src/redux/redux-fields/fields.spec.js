import { expect } from 'chai';
import fieldsReducer from './fields.reducer';
import {
  RESET_FIELDS,
  SET_FIELD
} from './fields.actions';

const fieldActon = {
  type: SET_FIELD,
  payload: {
    path: ['test'],
    value: 'test'
  }
};

describe('Fields Reducer Tests', () => {
  it('sets the correct field', () => {
    const nextState = fieldsReducer(undefined, fieldActon);

    expect(nextState.get('test')).to.equal('test');
  });

  it('resets the field', () => {
    const addFieldToStore = fieldsReducer(undefined, fieldActon);
    expect(addFieldToStore.get('test')).to.equal('test');
    const action = {
      type: RESET_FIELDS,
      payload: {
        path: ['test'],
      }
    };
    const nextState = fieldsReducer(addFieldToStore, action);

    expect(nextState.get('test')).to.equal(undefined);
  });
});
