import { knexLib } from './knex-lib';

describe('knexLib', () => {
  it('should work', () => {
    expect(knexLib()).toEqual('knex-lib');
  });
});
