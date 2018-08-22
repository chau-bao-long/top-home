import { all, fork } from "redux-saga/effects"
import { watchLogin } from "./login"
import { watchGetPhotos } from "./photos"
import { watchCreateBlog, watchUpdateBlog, watchGetBlogs, watchGetBlog } from "./blogs"

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchCreateBlog),
    fork(watchUpdateBlog),
    fork(watchGetBlogs),
    fork(watchGetBlog),
  ])
}
