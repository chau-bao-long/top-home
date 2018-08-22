import { call, put, takeEvery } from "redux-saga/effects"
import { TopHomeApi } from "services/restClient"

function* index(action) {
  try {
    const api = new TopHomeApi()
    const response = yield call([api, api.getPhotos], ...action.payload)
    yield put({type: "GET_BLOG_SUCC", payload: response})
  } catch(errors) {
    yield put({type: "GET_BLOG_FAIL", payload: response})
  }
}

function* upload(action) {
  try {
    const api = new TopHomeApi()
    const response = yield call([api, api.uploadPhoto], ...action.payload)
    yield put({type: "UPLOAD_BLOG_SUCC", payload: response})
  } catch(errors) {
    yield put({type: "UPLOAD_BLOG_FAIL", payload: response})
  }
}

export function* watchGetPhotos() {
  yield takeEvery("GET_PHOTOS", index)
}

export function* watchUploadPhoto() {
  yield takeEvery("UPLOAD_PHOTOS", upload)
}
