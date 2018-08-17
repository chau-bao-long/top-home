import { call, put, takeEvery } from "redux-saga/effects"
import { TopHomeApi } from "services/restClient"

function* login(action) {
  try {
    const api = new TopHomeApi()
    yield call([api, api.login], ...Object.values(action.payload))
    yield put({type: "LOGIN_SUCCEEDED"})
  } catch(errors) {
    yield put({type: "LOGIN_FAILED", error: errors[0].message})
  }
}

export function* watchLogin() {
  yield takeEvery("LOGIN", login)
}
