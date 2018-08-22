export function createBlog(title: string, body: string) {
  return { type: "CREATE_BLOG", payload: [title, body] }
}

export function updateBlog(id: string, title: string, body: string) {
  return { type: "UPDATE_BLOG", payload: [id, title, body] }
}

export function getBlogs() {
  return { type: "GET_BLOGS" }
}

export function getBlog(id: string) {
  return { type: "GET_BLOG", payload: id }
}

export function getPhotos() {
  return { type: "GET_PHOTOS" }
}

export function uploadPhoto(photo: any) {
  return { type: "UPLOAD_PHOTOS", payload: photo }
}
