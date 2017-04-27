const Maybe = require('../../src/monad/maybe');
const Some = require('../../src/monad/some');
const None = require('../../src/monad/none');

describe('Maybe monad', function() {
  it('should work as a formal Maybe monad', function() {
    const v = {
        name: 'abraham',
        children: [
          {
            name: 'homer',
            children: [
              { name: 'bart' },
              { name: 'lisa' }
            ]
          },
          { name: 'herbert' }
        ],
      },
      some = Some(v),
      none = None(),
      f = d => d.name,
      apSome = Some(f);

    expect(none.isNone()).toBe(true);
    expect(some.isNone()).toBe(false);
    expect(apSome.isNone()).toBe(false);
    expect(none).not.toBe(None());

    expect(some.chain(f)).toBe(f(v));
    expect(some.map(f)._value).toBe(f(v));
    expect(apSome.ap(some)._value).toBe(f(v));
    expect(some.join()).toBe(v);

    expect(Maybe.chain(f, some)).toBe(f(v));
    expect(Maybe.chain(f)(some)).toBe(f(v));
    expect(Maybe.map(f, some)._value).toBe(f(v));
    expect(Maybe.map(f)(some)._value).toBe(f(v));
    expect(Maybe.ap(some, apSome)._value).toBe(f(v));
    expect(Maybe.ap(some)(apSome)._value).toBe(f(v));
    expect(Maybe.join(some)).toBe(v);
    expect(Maybe.isNone(some)).toBe(false);
    expect(Maybe.isNone(none)).toBe(true);
  });
});
