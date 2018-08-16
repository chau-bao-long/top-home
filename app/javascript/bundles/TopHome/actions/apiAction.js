export function showLoading(isLoading) {
  return {type: 'LOADING', payload: isLoading}
}

export function setError(error: string = "") {
  return {type: 'SET_ERROR', payload: error}
}
