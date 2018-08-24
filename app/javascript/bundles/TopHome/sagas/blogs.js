import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { TopHomeApi } from "services/restClient"
import {
  getBlogsSucc,
  getBlogSucc,
  modifyBlogSucc,
  createBlog,
  updateBlog,
  getBlogs,
  getBlog,
  getPhotos,
  uploadPhoto,
} from "../actions/blogAction"
import { loading, error } from "../actions/apiAction"

function* post(action) {
  try {
    yield put(loading.blog(true))
    const api = new TopHomeApi()
    const response = yield call([api, api.createBlog], ...action.payload)
    yield put(loading.blog(false))
    yield put(modifyBlogSucc(response))
  } catch(errors) {
    yield put(loading.blog(false))
    yield put(error.blog(errors[0].message))
  }
}

function* patch(action) {
  try {
    yield put(loading.blog(true))
    const api = new TopHomeApi()
    const response = yield call([api, api.updateBlog], ...action.payload)
    yield put(loading.blog(false))
    yield put(modifyBlogSucc(response))
  } catch(errors) {
    yield put(loading.blog(false))
    yield put(error.blog(errors[0].message))
  }
}

function* index(action) {
  try {
    const api = new TopHomeApi()
    const response = yield call([api, api.getBlogs])
    yield put(getBlogsSucc(response))
  } catch(errors) {
    yield put(error.blog(errors[0].message))
  }
}

function* show(action) {
  try {
    const api = new TopHomeApi()
    const response = yield call([api, api.getBlog], action.payload)
    yield put(getBlogSucc(response))
  } catch(errors) {
    yield put(error.blog(errors[0].message))
  }
}

export function* watchCreateBlog() {
  yield takeEvery("CREATE_BLOG", post)
}

export function* watchUpdateBlog() {
  yield takeEvery("UPDATE_BLOG", patch)
}

export function* watchGetBlogs() {
  yield takeLatest("GET_BLOGS", index)
}

export function* watchGetBlog() {
  yield takeLatest("GET_BLOG", show)
}
