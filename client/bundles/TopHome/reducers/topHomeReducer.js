import { combineReducers } from 'redux'
import { reducer as loginReducer } from './loginReducer'
import { blogReducer } from './blogReducer'

const topHomeReducer = combineReducers({
  login: loginReducer,
  blog: blogReducer,
});

export default topHomeReducer;
