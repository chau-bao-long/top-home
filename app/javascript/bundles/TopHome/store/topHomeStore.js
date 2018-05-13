import { createStore } from 'redux';
import topHomeReducer from '../reducers/topHomeReducer';

const configureStore = (railsProps) => (
  createStore(topHomeReducer, railsProps)
);

export default configureStore;
