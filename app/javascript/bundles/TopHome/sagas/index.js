import { all, fork } from "redux-saga/effects"
import { watchLogin } from "./login"
import {
  watchCreateBlog,
  watchGetBlogs,
  watchGetBlog 
} from "./blogs"

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchCreateBlog),
    fork(watchGetBlogs),
    fork(watchGetBlog),
  ])
}
