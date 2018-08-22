const initialState = {
  photos: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "GET_PHOTOS_SUCC":
      return {
        ...state,
        photos: action.payload.data.data
      }
    case "GET_PHOTOS_FAIL":
      return {
        ...state
      }
    default: 
      return state
  }
}
