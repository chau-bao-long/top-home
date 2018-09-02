import { handleApiActions } from "./apiReducer"

export const commentReducer = handleApiActions(
  {
    GET_COMMENTS_SUCC: (state, action) => ({
      ...state,
      comments: action.payload.data,
    }),
  },
  {
    comments: [],
  }
)

