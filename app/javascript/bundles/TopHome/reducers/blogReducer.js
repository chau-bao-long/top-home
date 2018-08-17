import { reducer as apiReducer, initialState as apiInitialState } from "./apiReducer"

const initialState = {
  ...apiInitialState,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "MODIFY_BLOG_SUCC":
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error,
        blog: action.payload.data,
      }
    case "MODIFY_BLOG_FAIL":
      return {
        ...state,
        isLoading: false,
      }
    default:
      return apiReducer(state, action)
  }
}
