import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import blogReducer from './blogReducer';
import commentReducer from './commentReducer';
import socialReducer from './socialReducer';

export const reducers = {
  ...loginReducer,
  ...blogReducer,
  ...commentReducer,
  ...socialReducer,
};

export default combineReducers(reducers);
