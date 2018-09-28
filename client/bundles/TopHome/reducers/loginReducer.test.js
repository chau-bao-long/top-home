import { reducer } from './loginReducer';

describe('login reducer', () => {
  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      isAuth: false,
    })
  });
})
