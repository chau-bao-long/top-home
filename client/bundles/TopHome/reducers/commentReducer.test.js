import reducer from './commentReducer';

describe('comment reducer', () => {
  it('should return initialState', () => {
    expect(reducer.comment(undefined, {}))
      .toMatchObject({ comments: [] });
  });

  it('it should handle get comment successfully', () => {
    const action = {
      type: 'GET_COMMENTS_SUCC',
      payload: {
        data: ['test1', 'test2', 'test3'],
      },
    };
    expect(reducer.comment({ comments: [] }, action))
      .toMatchObject({
        comments: action.payload.data,
      });
  });

  it('it should handle create comment successful', () => {
    const action = {
      type: 'CREATE_COMMENT_SUCC',
      payload: {
        data: { comment: 'data' },
      },
    };
    const currentState = {
      comments: [],
      errorMsg: 'multi errors currently',
    };
    expect(reducer.comment(currentState, action))
      .toMatchObject({
        comments: [{ comment: 'data' }],
        errorMsg: '',
      });
  });
});
