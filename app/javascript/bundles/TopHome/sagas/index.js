import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { TopHomeApi } from '../services/restClient'

function* login(action) {
  try {
    const api = new TopHomeApi()
    yield call(api.login, ...action.payload)
    debugger
    yield put({type: "LOGIN_SUCCEEDED", user: user})
  } catch(e) {
    yield put({type: "LOGIN_FAILED", message: e.message})
  }
}

function* watchLogin() {
  yield takeEvery('LOGIN', login)
}

export default function* rootSaga() {
  yield all([
    watchLogin()
  ])
}
