import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';
import RestClient from '../services/restClient';
import {
  getBlogsSucc, getBlogSucc, modifyBlogSucc, clapsSucc, removeBlog,
} from '../actions/blogAction';
import { loading, error } from '../actions/apiAction';

export function* post(action) {
  try {
    yield put(loading.blog(true));
    const api = new RestClient();
    const response = yield call([api, api.createBlog], ...action.payload);
    yield put(modifyBlogSucc(response));
  } catch (errors) {
    yield put(error.blog(errors[0].message));
  } finally {
    yield put(loading.blog(false));
  }
}

export function* patch(action) {
  try {
    yield put(loading.blog(true));
    const api = new RestClient();
    const response = yield call([api, api.updateBlog], ...action.payload);
    yield put(modifyBlogSucc(response));
  } catch (errors) {
    yield put(error.blog(errors[0].message));
  } finally {
    yield put(loading.blog(false));
  }
}

export function* index() {
  try {
    const api = new RestClient();
    const response = yield call([api, api.getBlogs]);
    yield put(getBlogsSucc(response));
  } catch (errors) {
    yield put(error.blog(errors[0].message));
  }
}

export function* show(action) {
  try {
    const api = new RestClient();
    const response = yield call([api, api.getBlog], action.payload);
    yield put(getBlogSucc(response));
  } catch (errors) {
    yield put(error.blog(errors[0].message));
  }
}

export function* destroy(action) {
  try {
    const api = new RestClient();
    yield put(loading.blog(true));
    const response = yield call([api, api.deleteBlog], action.payload);
    yield put(removeBlog(response.data));
  } catch (errors) {
    yield put(error.blog(errors[0].message));
  } finally {
    yield put(loading.blog(false));
  }
}

export function* claps(action) {
  try {
    const api = new RestClient();
    const response = yield call([api, api.claps], action.payload);
    yield put(clapsSucc(response));
  } catch (errors) {
    // nothing
  }
}

export function* watchCreateBlog() {
  yield takeEvery('CREATE_BLOG', post);
}

export function* watchUpdateBlog() {
  yield takeEvery('UPDATE_BLOG', patch);
}

export function* watchGetBlogs() {
  yield takeLatest('GET_BLOGS', index);
}

export function* watchGetBlog() {
  yield takeLatest('GET_BLOG', show);
}

export function* watchDeleteBlog() {
  yield takeLatest('DELETE_BLOG', destroy);
}

export function* watchClaps() {
  yield takeLatest('CLAPS', claps);
}
