import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { TopHomeApi } from "services/restClient"
import {
  getComments,
  getCommentsSucc,
  createComment,
  createCommentSucc,
} from "../actions/commentAction"
import { loading, error } from "../actions/apiAction"

function *get(action) {
  try {
    yield put(loading.comment(true))
    const api = new TopHomeApi()
    const response = yield call([api, api.getComments], action.payload)
    yield put(getCommentsSucc(response))
  } catch(errors) {
    yield put(error.comment(errors[0].message))
  } finally {
    yield put(loading.comment(false))
  }
}

function *post(action) {
  try {
    yield put(loading.comment(true))
    const api = new TopHomeApi()
    const response = yield call([api, api.postComment], ...action.payload)
    yield put(createCommentSucc(response))
  } catch(errors) {
    yield put(error.comment(errors[0].message))
  } finally {
    yield put(loading.comment(false))
  }
}

export function* watchGetComments() {
  yield takeEvery("GET_COMMENTS", get)
}

export function* watchCreateComment() {
  yield takeEvery("CREATE_COMMENT", post)
}
