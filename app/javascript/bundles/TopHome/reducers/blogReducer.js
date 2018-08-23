import { 
  reducer as apiReducer,
  initialState as apiInitialState 
} from "./apiReducer"

const initialState = {
  ...apiInitialState,
  blogs: [],
  photos: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "MODIFY_BLOG_SUCC":
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error,
        blog: action.payload.data,
      }
    case "MODIFY_BLOG_FAIL":
      return {
        ...state,
        isLoading: false,
      }
    case "GET_BLOGS_SUCC":
      return {
        ...state,
        isLoading: false,
        blogs: action.payload.data,
      }
    case "GET_BLOGS_FAIL":
      return {
        ...state,
        isLoading: false,
      }
    case "GET_BLOG_SUCC":
      return {
        ...state,
        isLoading: false,
        blog: action.payload.data,
      }
    case "GET_BLOG_FAIL":
      return {
        ...state,
        isLoading: false,
      }
    case "GET_PHOTOS_SUCC":
      return {
        ...state,
        isLoading: false,
        photos: action.payload.data.photos,
      }
    case "GET_PHOTOS_FAIL":
      return {
        ...state,
        isLoading: false,
      }
    case "UPLOAD_PHOTO_SUCC":
      return {
        ...state,
        isLoading: false,
        photos: [...state.photos, action.payload.data.photo]
      }
    case "UPLOAD_PHOTO_FAIL":
      return {
        ...state,
        isLoading: false,
      }
    default:
      return apiReducer(state, action)
  }
}
