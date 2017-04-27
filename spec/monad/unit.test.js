const Unit = require('../../src/monad/unit');

describe('Unit monad', function() {
  it('should work as a formal Unit monad', function() {
    const v = 3,
      unit = Unit(v),
      f = d => 2 * d,
      apUnit = Unit(f);

    expect(unit.chain(f)).toBe(f(v));
    expect(unit.map(f)._value).toBe(f(v));
    expect(apUnit.ap(unit)._value).toBe(f(v));
    expect(unit.join()).toBe(v);

    expect(Unit.chain(f, unit)).toBe(f(v));
    expect(Unit.chain(f)(unit)).toBe(f(v));
    expect(Unit.map(f, unit)._value).toBe(f(v));
    expect(Unit.map(f)(unit)._value).toBe(f(v));
    expect(Unit.ap(unit, apUnit)._value).toBe(f(v));
    expect(Unit.ap(unit)(apUnit)._value).toBe(f(v));
    expect(Unit.join(unit)).toBe(v);
  });
});
