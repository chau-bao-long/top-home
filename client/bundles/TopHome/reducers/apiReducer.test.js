import { handleApiActions, initialState } from './apiReducer';

describe('api reducer', () => {
  const testMap = handleApiActions({
    defaultState: { testDefault: '' },
    test: { TEST_ACTION: state => state },
  });
  const testReducer = handleApiActions(testMap);

  it('should return initialState', () => {
    expect(testReducer.test(undefined, {}))
      .toMatchObject(initialState);
  });

  it('should handle loading action', () => {
    const action = {
      type: 'LOADING/TEST',
      payload: true,
    };
    expect(testReducer.test({}, action))
      .toMatchObject({ isLoading: action.payload });
  });

  it('should handle error action', () => {
    const action = {
      type: 'ERROR/TEST',
      payload: 'error message test',
    };
    expect(testReducer.test({}, action))
      .toMatchObject({ errorMsg: action.payload });
  });
});
