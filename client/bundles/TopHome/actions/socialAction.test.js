import * as actions from './socialAction';

describe('social actions', () => {
  it('should create subscribe action', () => {
    const email = 'myemail@email.com';
    expect(actions.subscribe(email).payload)
      .toEqual(email);
  });
});
