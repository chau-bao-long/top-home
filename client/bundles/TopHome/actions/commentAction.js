import { createActions } from 'redux-actions';

export const {
  getComments,
  createComment,
  getCommentsSucc,
} = createActions({
  GET_COMMENTS: blogId => blogId,
  CREATE_COMMENT: (blogId, title, content) => [blogId, title, content],
  GET_COMMENTS_SUCC: comment => comment,
});
