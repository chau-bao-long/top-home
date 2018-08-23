import { handleActions } from 'redux-actions'

export const reducer = handleActions(
  {
    LOADING: (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    SET_ERROR: (state, action) => ({
      ...state,
      errorMsg: action.payload
    }),
  },
  {
    isLoading: false,
    errorMsg: '',
  }
)
