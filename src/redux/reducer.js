import { combineReducers } from 'redux';

import App from './App.reducer';
import Teas from './Teas.reducer';

export default combineReducers({
  App,
  Teas
});
