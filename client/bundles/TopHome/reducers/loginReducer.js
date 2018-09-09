import { handleApiActions } from "./apiReducer"

export const reducer = handleApiActions({
  login: {
    LOGIN_SUCC: (state, action) => ({
      ...state,
      allCookies: {
        ...state.allCookies,
        is_auth: true,
      },
    }),
  },
  defaultState: {
    isAuth: false,
  },
});
