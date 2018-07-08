import { combineReducers } from 'redux'
import { TOP_HOME_NAME_UPDATE } from '../constants/topHomeConstants'
import loginReducer from './loginReducer'

const topHomeReducer = combineReducers({ 
  login: loginReducer,
});

export default topHomeReducer;
