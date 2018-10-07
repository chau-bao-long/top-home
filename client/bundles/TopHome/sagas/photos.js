import { call, put, takeEvery } from 'redux-saga/effects';
import RestClient from '../services/restClient';

function* index() {
  try {
    const api = new RestClient();
    const response = yield call([api, api.getPhotos]);
    yield put({ type: 'GET_PHOTOS_SUCC', payload: response });
  } catch (errors) {
    yield put({ type: 'GET_PHOTOS_FAIL', payload: errors });
  }
}

function* upload(action) {
  try {
    const api = new RestClient();
    const response = yield call([api, api.uploadPhoto], ...action.payload);
    yield put({ type: 'UPLOAD_PHOTO_SUCC', payload: response });
  } catch (errors) {
    yield put({ type: 'UPLOAD_PHOTO_FAIL', payload: errors });
  }
}

export function* watchGetPhotos() {
  yield takeEvery('GET_PHOTOS', index);
}

export function* watchUploadPhoto() {
  yield takeEvery('UPLOAD_PHOTO', upload);
}
