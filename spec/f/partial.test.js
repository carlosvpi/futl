var partial = require('../../src/f/partial');
var partial = require('../../src/f/partial');
var _ = require('../../src/marker');

describe('Partial', function() {

  function f(a, b, c) {
    return a + b * c * c;
  }

  it('creates a partial for a certain formula', function() {
    var a = 6,
      b = 2,
      c = 5,
      result = f(a, b, c),
      p = partial(f, [_, _, c]);
      p2 = partial(p, [_, b]);
    expect(p(a, b)).toBe(result);
    expect(p(a)(b)).toBe(result);
    expect(p2(a)).toBe(result);
  });
})
