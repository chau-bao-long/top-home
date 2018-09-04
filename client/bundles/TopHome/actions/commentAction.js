import { createActions } from 'redux-actions'

export const {
  getComments,
  getCommentsSucc,
  createComment,
} = createActions({
  GET_COMMENTS: blogId => blogId,
  CREATE_COMMENT: (blogId, title: string, content: string) => [blogId, title, content],
  GET_COMMENTS_SUCC: comment => comment,
})
