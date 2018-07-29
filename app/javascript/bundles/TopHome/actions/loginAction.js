export function showLoading(isLoading) {
  return {type: 'LOGIN_LOADING', payload: isLoading}
}

export function login(payload) {
  return {type: 'LOGIN', payload}
}

export function setError(error: string = "") {
  return {type: 'SET_ERROR', payload: error}
}
