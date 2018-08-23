import { createActions } from "redux-action"

export const {
  showLoading,
  setError,
} = createActions({
  LOADING: (isLoading: boolean) => isLoading,
  SET_ERROR: (error: string = "") => error,
})
