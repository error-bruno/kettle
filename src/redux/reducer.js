import { combineReducers } from 'redux';

import App from './App.reducer';
import Teas from './Teas.reducer';
import fields from './redux-fields/fields.reducer';

export default combineReducers({
  App,
  fields,
  Teas
});
