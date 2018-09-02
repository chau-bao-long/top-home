import { combineReducers } from 'redux'
import { reducer as loginReducer } from './loginReducer'
import { blogReducer } from './blogReducer'
import { commentReducer } from './commentReducer'

const topHomeReducer = combineReducers({
  login: loginReducer,
  blog: blogReducer,
  comment: commentReducer,
});

export default topHomeReducer;
