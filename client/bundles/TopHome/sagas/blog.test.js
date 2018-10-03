import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { TopHomeApi } from '../services/restClient';
import { loading } from '../actions/apiAction';
import { destroy } from './blogs';

describe('delete blog saga test', () => {
  const action = { payload: 99 };
  const generator = cloneableGenerator(destroy)(action);

  it('should show loading on delete', () => {
    expect(generator.next().value).toEqual(put(loading.blog(true)));
  });

  it('should call delete blog api', () => {
    const api = new TopHomeApi();
    const result = generator.next().value;
    const expected = call([api, api.deleteBlog], ...Object.values(action.payload));
    expect(result.CALL.fn).toEqual(expected.CALL.fn);
  });

  it('should emit error action when call api fails', () => {
    const gen = generator.clone();
    const errorMsg = 'error test msg';
    expect(gen.throw([{ message: errorMsg }]).value.PUT.action.payload).toEqual(errorMsg);
    expect(gen.next().value).toEqual(put(loading.blog(false)));
  });

  it('should emit remove blog action', () => {
    const responseBlog = { id: 1, content: 'blog content go here' };
    const response = { data: responseBlog };
    expect(generator.next(response).value.PUT.action.payload).toEqual(responseBlog);
  });

  it('should hide loading after blog has deleted successfully', () => {
    expect(generator.next().value).toEqual(put(loading.blog(false)));
  });

  it('perform no further work', () => {
    expect(generator.next().value).not.toBeDefined();
  });
});
