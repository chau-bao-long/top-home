import { call, put, takeLatest } from 'redux-saga/effects';
import { TopHomeApi } from '../services/restClient';
import { loading, error } from '../actions/apiAction';
import { loginSucc } from '../actions/loginAction';

export function* login(action) {
  try {
    yield put(loading.login(true));
    const api = new TopHomeApi();
    yield call([api, api.login], ...Object.values(action.payload));
    yield put(loading.login(false));
    yield put(loginSucc());
  } catch (errors) {
    yield put(error.login(errors[0].message));
    yield put(loading.login(false));
  }
}

export function* watchLogin() {
  yield takeLatest('LOGIN', login)
}
