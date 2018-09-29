import reducer from './loginReducer';

describe('login reducer', () => {
  it('should return initialState', () => {
    expect(reducer.login(undefined, {})).toMatchObject({
      isAuth: false,
    });
  });

  it('it should handle login successfully', () => {
    expect(reducer.login({ isAuth: false }, { type: 'LOGIN_SUCC' }))
      .toMatchObject({
        isAuth: true,
        allCookies: {
          is_auth: true,
        },
      });
  });
});
