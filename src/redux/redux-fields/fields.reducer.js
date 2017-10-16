import { Map } from 'immutable';
import {
  RESET_FIELDS,
  SET_FIELD
} from './fields.actions';

const initialState = Map();

export default function reducer(state = initialState, action) {
  if (!(state instanceof Map)) return initialState.mergeDeep(state);

  switch (action.type) {
    case RESET_FIELDS: {
      const { path } = action.payload;
      return state.deleteIn(path);
    }
    case SET_FIELD: {
      const { path, value } = action.payload;
      return state.setIn(path, value);
    }
  }

  return state;
}
