import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import blogReducer from './blogReducer';
import commentReducer from './commentReducer';

export const reducers = {
  ...loginReducer,
  ...blogReducer,
  ...commentReducer,
};

export default combineReducers(reducers);
