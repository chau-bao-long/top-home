export const initialState = {
  isLoading: false,
  errorMsg: '',
}

export function reducer(state, action) {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: action.payload,
      }
    case "SET_ERROR":
      return {
        ...state,
        errorMsg: action.payload
      }
    default:
      return state
  }
}
