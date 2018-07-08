import { all, spawn, fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { TopHomeApi } from 'services/restClient'

function* login(action) {
  try {
    const api = new TopHomeApi()
    yield call([api, api.login], action.payload)
    yield put({type: 'LOGIN_SUCCEEDED'})
  } catch(e) {
    debugger
    yield put({type: 'LOGIN_FAILED', error: e.message})
  }
}

function* watchLogin() {
  yield takeEvery('LOGIN', login)
}

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
  ])
}
