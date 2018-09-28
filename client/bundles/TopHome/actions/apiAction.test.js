describe('api actions', () => {
  beforeEach(() => {
    jest.mock('../reducers/topHomeReducer', () => ({
      reducers: {
        login: ''
      }
    }))
  })
  it('should create LOADING action', () => {
    const { loading } = require('./apiAction')
    expect(loading.login(true)).toEqual({
      type: 'LOADING/LOGIN',
      payload: true,
    })
    expect(loading.login(false)).toEqual({
      type: 'LOADING/LOGIN',
      payload: false,
    })
  })
  it('should create ERROR action', () => {
    const { error } = require('./apiAction')
    expect(error.login(true)).toEqual({
      type: 'ERROR/LOGIN',
      payload: true,
    })
    expect(error.login(false)).toEqual({
      type: 'ERROR/LOGIN',
      payload: false,
    })
  })
})
