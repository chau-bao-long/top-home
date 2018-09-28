import * as actions from './commentAction.js';

describe('comment action', () => {
  it('should create GET_COMMENT action', () => {
    const blogId = 1;
    expect(actions.getComments(blogId)).toEqual({
      type: 'GET_COMMENTS',
      payload: blogId,
    })
  })

  it('should create CREATE_COMMENT action', () => {
    const blogId = 1, title = 't', content = 'c';
    expect(actions.createComment(blogId, title, content)).toEqual({
      type: 'CREATE_COMMENT',
      payload: [blogId, title, content],
    })
  })

  it('should create CREATE_COMMENT_SUCC action', () => {
    const comment = 'some comment';
    expect(actions.getCommentsSucc(comment)).toEqual({
      type: 'GET_COMMENTS_SUCC',
      payload: comment,
    })
  })
})

