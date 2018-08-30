import { handleApiActions } from "./apiReducer"

export const blogReducer = handleApiActions(
  {
    MODIFY_BLOG_SUCC: (state, action) => ({
      ...state,
      blog: action.payload.data,
    }),
    GET_BLOGS_SUCC: (state, action) => ({
      ...state,
      blogs: action.payload.data,
    }),
    GET_BLOG_SUCC: (state, action) => ({
      ...state,
      blog: action.payload.data,
    }),
    GET_PHOTOS_SUCC: (state, action) => ({
      ...state,
      photos: action.payload.data.photos,
    }),
    UPLOAD_PHOTO_SUCC: (state, action) => ({
      ...state,
      photos: [...state.photos, action.payload.data.photo]
    }),
    CLEAR_CURRENT_BLOG: (state, action) => ({
      ...state,
      blog: null,
    }),
    CLAPS_SUCC: (state, action) => ({
      ...state,
      blogs: state.blogs.map(b => {
        const updatedBlog = action.payload.data
        return b.id ==  updatedBlog.id ? updatedBlog : b
      }),
    }),
  },
  {
    blogs: [],
    photos: [],
  }
)
