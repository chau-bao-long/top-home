import { call, put, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { login, watchLogin } from './login';
import { TopHomeApi } from '../services/restClient';
import { loading } from '../actions/apiAction';
import { loginSucc } from '../actions/loginAction';

describe('login saga test', () => {
  const action = { payload: '' };
  const generator = cloneableGenerator(login)(action);

  it('should login show loading on login', () => {
    expect(generator.next().value).toEqual(put(loading.login(true)));
  });

  it('should call login api', () => {
    const api = new TopHomeApi();
    const result = generator.next().value;
    const expected = call([api, api.login], ...Object.values(action.payload));
    expect(result.CALL.fn).toEqual(expected.CALL.fn);
  });

  it('should hide loading and emit succ action when login api response', () => {
    const gen = generator.clone();
    expect(gen.next().value).toEqual(put(loading.login(false)));
    expect(gen.next().value).toEqual(put(loginSucc()));
  });

  it('should hide loading and emit error msg in action when login fail', () => {
    const gen = generator.clone();
    const errorMsg = 'error test msg';
    expect(gen.throw([{ message: errorMsg }]).value.PUT.action.payload).toEqual(errorMsg);
    expect(gen.next().value).toEqual(put(loading.login(false)));
  });

  it('perform no further work', () => {
    generator.next();
    generator.next();
    expect(generator.next().value).not.toBeDefined();
  });
});

describe('watch login test', () => {
  const generator = watchLogin();

  it('should watch latest login action', () => {
    expect(generator.next().value).toEqual(takeLatest('LOGIN', login));
  });
});
