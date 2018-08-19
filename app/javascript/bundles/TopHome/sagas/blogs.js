import { call, put, takeEvery } from "redux-saga/effects"
import { TopHomeApi } from "services/restClient"

function* post(action) {
  try {
    const api = new TopHomeApi()
    const response = yield call([api, api.createBlog], ...action.payload)
    yield put({type: "MODIFY_BLOG_SUCC", payload: response})
  } catch(errors) {
    yield put({type: "MODIFY_BLOG_FAIL", error: errors[0].message})
  }
}

function* patch(action) {
  try {
    const api = new TopHomeApi()
    const response = yield call([api, api.updateBlog], ...action.payload)
    yield put({type: "MODIFY_BLOG_SUCC", payload: response})
  } catch(errors) {
    yield put({type: "MODIFY_BLOG_FAIL", error: errors[0].message})
  }
}

function* index(action) {
  try {
    const api = new TopHomeApi()
    const response = yield call([api, api.getBlogs])
    yield put({type: "GET_BLOGS_SUCC", payload: response})
  } catch(errors) {
    yield put({type: "GET_BLOGS_FAIL", error: errors[0].message})
  }
}

function* show(action) {
  try {
    const api = new TopHomeApi()
    yield call([api, api.getBlog], ...Object.values(action.payload))
    yield put({type: "GET_BLOG_SUCC"})
  } catch(errors) {
    yield put({type: "GET_BLOG_FAIL", error: errors[0].message})
  }
}

export function* watchCreateBlog() {
  yield takeEvery("CREATE_BLOG", post)
}

export function* watchUpdateBlog() {
  yield takeEvery("UPDATE_BLOG", patch)
}

export function* watchGetBlogs() {
  yield takeEvery("GET_BLOGS", index)
}

export function* watchGetBlog() {
  yield takeEvery("GET_BLOG", show)
}
