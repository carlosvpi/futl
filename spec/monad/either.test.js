const Either = require('../../src/monad/either');
const Left = require('../../src/monad/left');
const Right = require('../../src/monad/right');

describe('Either monad', function() {
  it('should work as a formal Either monad', function() {
    const abe = {
        name: 'abraham',
        children: [
          {
            name: 'homer',
            surname: 'simpson',
            children: [
              { name: 'bart' },
              { name: 'lisa' }
            ]
          },
          { name: 'herbert' }
        ],
      },
      homer = abe.children[0],
      eitherAbe = Right(abe),
      getProp = prop => v => v.hasOwnProperty(prop) ? Right(v[prop]) : Left('missing ' + prop),
      getNth = nth => v => v.length <= nth ? Left('Array too short') : Right(v[nth]);
      eitherHomer = eitherAbe.chain(getProp('children')).chain(getNth(0));

    expect(eitherAbe.chain(getProp('surname')).isLeft()).toBe(true);
    expect(eitherHomer.isLeft()).toBe(false);
    expect(eitherHomer.chain(getProp('name'))._value).toBe(homer.name);

    expect(Either.isLeft(Either.chain(getProp('surname'), eitherAbe))).toBe(true);
    expect(Either.isLeft(eitherHomer)).toBe(false);
    expect(Either.chain(getProp('name'))(eitherHomer)._value).toBe(homer.name);
  });
});
