import { combineReducers } from 'redux';
import { TOP_HOME_NAME_UPDATE } from '../constants/topHomeConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case TOP_HOME_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const topHomeReducer = combineReducers({ name });

export default topHomeReducer;
