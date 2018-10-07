import { call, put, takeLatest } from 'redux-saga/effects';
import RestClient from '../services/restClient';
import { loading, error } from '../actions/apiAction';

function* subscribe(action) {
  try {
    const api = new RestClient();
    yield put(loading.social(true));
    yield call([api, api.subscribe], action.payload);
  } catch (errors) {
    yield put(error.social(errors[0].message));
  } finally {
    yield put(loading.social(false));
  }
}

export function* watchSubscribe() {
  yield takeLatest('SUBSCRIBE', subscribe);
}
