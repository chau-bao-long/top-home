import { handleApiActions } from './apiReducer';

export default handleApiActions({
  login: {
    LOGIN_SUCC: state => ({
      ...state,
      allCookies: {
        ...state.allCookies,
        is_auth: true,
      },
      isAuth: true,
    }),
  },
  defaultState: {
    isAuth: false,
  },
});
