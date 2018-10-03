import blogReducer from './blogReducer';

describe('blog reducer', () => {
  it('should return initial state', () => {
    expect(blogReducer.blog(undefined, {}))
      .toMatchObject({ blogs: [], photos: [] });
  });

  it('should handle modify blog action', () => {
    const action = {
      type: 'MODIFY_BLOG_SUCC',
      payload: {
        data: { content: '' },
      },
    };
    expect(blogReducer.blog({}, action))
      .toMatchObject({ blog: action.payload.data });
  });

  it('should handle clear blog action', () => {
    const action = { type: 'CLEAR_CURRENT_BLOG' };
    expect(blogReducer.blog({ blog: { test: '' } }, action))
      .toMatchObject({ blog: null });
  });

  it('should handle remove blog action', () => {
    const action = { type: 'REMOVE_BLOG', payload: { id: 1 } };
    const currentState = { blogs: [{ id: 1 }, { id: 3 }, { id: 4 }] };
    expect(blogReducer.blog(currentState, action))
      .toMatchObject({ blogs: [{ id: 3 }, { id: 4 }] });
  });
});
