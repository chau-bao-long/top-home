export function showLoading(isLoading) {
  return {type: 'LOGIN_LOADING', payload: isLoading}
}

export function login(payload) {
  return {type: 'LOGIN', payload}
}
