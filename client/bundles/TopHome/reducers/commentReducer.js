import { handleApiActions } from './apiReducer';

export default handleApiActions({
  comment: {
    GET_COMMENTS_SUCC: (state, action) => ({
      ...state,
      comments: action.payload.data,
    }),
    CREATE_COMMENT_SUCC: (state, action) => ({
      ...state,
      comments: [...state.comments, action.payload.data],
      errorMsg: '',
    }),
  },
  defaultState: {
    comments: [],
  },
});
