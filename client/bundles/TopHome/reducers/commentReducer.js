import { handleApiActions } from './apiReducer';

export default handleApiActions({
  comment: {
    GET_COMMENTS_SUCC: (state, action) => ({
      ...state,
      comments: action.payload.data,
    }),
  },
  defaultState: {
    comments: [],
  },
});
