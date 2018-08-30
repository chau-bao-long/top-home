import { handleApiActions } from "./apiReducer"

export const reducer = handleApiActions(
  {
    LOGIN_SUCC: (state, action) => ({
      ...state,
      allCookies: {
        ...state.allCookies,
        is_auth: true,
      },
    }),
  },
  {
    isAuth: false,
  }
)
