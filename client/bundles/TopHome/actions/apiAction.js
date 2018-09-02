import { createActions } from "redux-actions"

export const {
  loading,
  error,
} = createActions({
  LOADING: {
    LOGIN: loadingPayload,
    BLOG: loadingPayload,
    COMMENT: loadingPayload,
  },
  ERROR: {
    LOGIN: errorPayload,
    BLOG: errorPayload,
    COMMENT: errorPayload,
  },
})

const loadingPayload = (isloading: boolean) => isLoading
const errorPayload = (error: string = "") => error
