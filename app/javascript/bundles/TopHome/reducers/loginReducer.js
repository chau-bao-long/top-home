import {
  reducer as apiReducer,
  initialState as apiInitialState 
} from "./apiReducer"

const initialState = {
  ...apiInitialState,
  isAuth: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN_FAILED":
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error
      }
    case "LOGIN_SUCCEEDED":
      return {
        ...state,
        isLoading: false,
        allCookies: {
          ...state.allCookies,
          is_auth: true,
        },
      }
    default:
      return apiReducer(state, action)
  }
}
