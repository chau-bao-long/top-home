import { handleApiActions } from "./apiReducer"

export const commentReducer = handleApiActions({
  comment: {
    GET_COMMENTS_SUCC: (state, action) => ({
      ...state,
      comments: action.payload.data,
    }),
  },
  defaultState: {
    comments: [],
  },
})
