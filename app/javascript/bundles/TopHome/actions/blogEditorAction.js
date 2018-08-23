import { createActions } from 'redux-actions'

export const {
  createBlog,
  updateBlog,
  getBlogs,
  getBlog,
  getPhotos,
  postPhoto,
} = createActions({
  CREATE_BLOG: (title: string, body: string) => [title, body],
  UPDATE_BLOG: (id: string, title: string, body: string) => [id, title, body],
  GET_BLOGS: undefined,
  GET_BLOG: (id: string) => id,
  GET_PHOTOS: undefined,
  UPLOAD_PHOTO: (photo: File) => [photo],
})
