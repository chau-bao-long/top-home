export function createBlog(payload) {
  { type: "CREATE_BLOG", payload }
}

export function getBlogs(payload) {
  { type: "GET_BLOGS", payload }
}

export function getBlog(payload) {
  { type: "GET_BLOG", payload }
}
