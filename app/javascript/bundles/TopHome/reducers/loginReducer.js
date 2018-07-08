export default (state = {isLoading: false}, action) => {
  switch(action.type) {
    case 'LOGIN_LOADING':
      return {...state, isLoading: action.payload}
    case 'LOGIN_FAILED':
      return {...state, isLoading: false}
    case 'LOGIN_SUCCEEDED':
      return {...state, isLoading: false}
    default:
      return state
  }
}
