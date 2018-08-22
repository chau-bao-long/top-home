import { combineReducers } from 'redux'
import { TOP_HOME_NAME_UPDATE } from '../constants/topHomeConstants'
import loginReducer from './loginReducer'
import blogReducer from './blogReducer'
import blogEditorReducer from './blogEditorReducer'

const topHomeReducer = combineReducers({ 
  login: loginReducer,
  blog: blogReducer,
  blogEditor: blogEditorReducer,
});

export default topHomeReducer;
