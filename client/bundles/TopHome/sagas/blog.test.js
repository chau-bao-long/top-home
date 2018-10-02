import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { TopHomeApi } from '../services/restClient';
import {
  getBlogsSucc, getBlogSucc, modifyBlogSucc, clapsSucc,
} from '../actions/blogAction';
import { loading, error } from '../actions/apiAction';
import { cloneableGenerator } from 'redux-saga/utils';
import { destroy } from './blogs';

describe('delete blog saga test', () => {
  const action = { payload: 99 };
  const generator = cloneableGenerator(destroy)(action);

  it('should show loading on delete', () => {
    expect(generator.next().value).toEqual(put(loading.blog(true)));
  });

  it('should call delete blog  api', () => {
    const api = new TopHomeApi();
    const result = generator.next().value;
    const expected = call([api, api.deleteBlog], ...Object.values(action.payload));
    expect(result.CALL.fn).toEqual(expected.CALL.fn);
  });
});
