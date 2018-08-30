import { createActions } from 'redux-actions'

export const {
  modifyBlogSucc,
  getBlogsSucc,
  getBlogSucc,
  createBlog,
  updateBlog,
  getBlogs,
  getBlog,
  getPhotos,
  uploadPhoto,
  clearCurrentBlog,
  claps,
  clapsSucc,
} = createActions({
  MODIFY_BLOG_SUCC: payload => payload,
  GET_BLOGS_SUCC: payload => payload,
  GET_BLOG_SUCC: payload => payload,
  CREATE_BLOG: (title: string, body: string) => [title, body],
  UPDATE_BLOG: (id: string, title: string, body: string) => [id, title, body],
  GET_BLOGS: undefined,
  GET_BLOG: (id: string) => id,
  GET_PHOTOS: undefined,
  UPLOAD_PHOTO: (photo: File) => [photo],
  CLEAR_CURRENT_BLOG: undefined,
  CLAPS: (id: number) => id,
  CLAPS_SUCC: payload => payload,
})
