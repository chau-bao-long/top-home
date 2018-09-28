import * as actions from './loginAction.js';

describe('login actions', () => {
  it('should create LOGIN action', () => {
    const payload = {'user': { 'name': 'username' }}
    expect(actions.login(payload)).toEqual({
      type: 'LOGIN',
      payload: payload,
    })
  })

  it('should create LOGIN_SUCC action', () => {
    expect(actions.loginSucc()).toEqual({ type: 'LOGIN_SUCC' })
  })
})
