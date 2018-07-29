const initialState = {
  isLoading: false,
  isAuth: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      }
    case "LOGIN_FAILED":
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error
      }
    case "SET_ERROR":
      return {
        ...state,
        errorMsg: action.payload
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
      return state
  }
}
