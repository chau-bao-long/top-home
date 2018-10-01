import { createActions } from 'redux-actions';

export const {
  getComments,
  createComment,
  createCommentSucc,
  getCommentsSucc,
} = createActions({
  GET_COMMENTS: blogId => blogId,
  CREATE_COMMENT: (blogId, title, content) => [blogId, title, content],
  CREATE_COMMENT_SUCC: payload => payload,
  GET_COMMENTS_SUCC: comment => comment,
});
