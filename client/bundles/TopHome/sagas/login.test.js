import { login, watchLogin } from './login';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TopHomeApi } from '../services/restClient';
import { loading, error } from '../actions/apiAction';
import { loginSucc } from '../actions/loginAction';

describe('login saga test', () => {
  const action = { payload: '' };
  const generator = login(action);
  it('should login show loading on login', () => {
    expect(generator.next().value).toEqual(put(loading.login(true)));
  });

//   it('should call login api', () => {
//     const api = new TopHomeApi();
//     expect(generator.next().value)
//       .toEqual(call([api, api.login], ...Object.values(action.payload)));
//   });
});
