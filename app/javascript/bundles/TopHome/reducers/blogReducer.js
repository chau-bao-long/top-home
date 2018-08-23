import { handleActions } from 'redux-actions'

export const blogReducer = handleActions(
  {
    MODIFY_BLOG_SUCC: (state, action) => ({
      ...state,
      isLoading: false,
      errorMsg: action.error,
      blog: action.payload.data,
    }),
    MODIFY_BLOG_FAIL: (state, action) => ({
      ...state,
      isLoading: false,
    }),
    GET_BLOGS_SUCC: (state, action) => ({
      ...state,
      isLoading: false,
      blogs: action.payload.data,
    }),
    GET_BLOGS_FAIL: (state, action) => ({
      ...state,
      isLoading: false,
    }),
    GET_BLOG_SUCC: (state, action) => ({
      ...state,
      isLoading: false,
      blog: action.payload.data,
    }),
    GET_BLOG_FAIL: (state, action) => ({
      ...state,
      isLoading: false,
    }),
    GET_PHOTOS_SUCC: (state, action) => ({
      ...state,
      isLoading: false,
      photos: action.payload.data.photos,
    }),
    GET_PHOTOS_FAIL: (state, action) => ({
      ...state,
      isLoading: false,
    }),
    UPLOAD_PHOTO_SUCC: (state, action) => ({
      ...state,
      isLoading: false,
      photos: [...state.photos, action.payload.data.photo]
    }),
    UPLOAD_PHOTO_FAIL: (state, action) => ({
      ...state,
      isLoading: false,
    }),
  },
  {
    blogs: [],
    photos: [],
  }
)
