import { all, fork } from 'redux-saga/effects';
import { watchLogin } from './login';
import { watchGetPhotos, watchUploadPhoto } from './photos';
import { watchSubscribe } from './social';
import {
  watchCreateBlog,
  watchUpdateBlog,
  watchGetBlogs,
  watchGetBlog,
  watchClaps,
  watchDeleteBlog,
} from './blogs';
import {
  watchGetComments,
  watchCreateComment,
} from './comments';

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchCreateBlog),
    fork(watchUpdateBlog),
    fork(watchGetBlogs),
    fork(watchGetBlog),
    fork(watchUploadPhoto),
    fork(watchGetPhotos),
    fork(watchClaps),
    fork(watchCreateComment),
    fork(watchGetComments),
    fork(watchDeleteBlog),
    fork(watchSubscribe),
  ]);
}
