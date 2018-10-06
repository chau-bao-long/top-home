import { createActions } from 'redux-actions';

export const {
  subscribe,
} = createActions({
  SUBSCRIBE: email => email,
});
