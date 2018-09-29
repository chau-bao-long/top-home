import * as actions from './blogAction';

describe('blog action', () => {
  it('should contains modify blog action', () => {
    expect(actions.modifyBlogSucc('test data'))
      .toMatchObject({
        type: 'MODIFY_BLOG_SUCC',
        payload: 'test data',
      });
  });
  it('should contains create blog action', () => {
    expect(actions.createBlog('title', 'content'))
      .toMatchObject({
        type: 'CREATE_BLOG',
        payload: ['title', 'content'],
      });
  });
  it('should contains get blogs action', () => {
    expect(actions.getBlogs())
      .toMatchObject({
        type: 'GET_BLOGS',
      });
  });
  it('should contains upload photo action', () => {
    const file = jest.fn();
    expect(actions.uploadPhoto(file))
      .toMatchObject({
        type: 'UPLOAD_PHOTO',
        payload: [file],
      });
  });
});
