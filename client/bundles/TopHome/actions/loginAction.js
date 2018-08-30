import { createActions } from "redux-actions"

export const {
  login,
  loginSucc,
} = createActions({
  LOGIN: payload => payload,
  LOGIN_SUCC: undefined,
})
