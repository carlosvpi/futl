describe('Where', function() {
  it('tests an object', function() {
    var where = require('../../src/obj/where');
    var nameCond = d => d.length < 10;
    var vCond = d => d.length == 2;
    var kindCond = d => d.hasOwnProperty('prop');
    var obj = {
      name: 'object',
      v: [1, 2],
      kind: { prop: 0 },
      other: 0
    };
    var pfTrue = {
      name: nameCond,
      v: vCond,
      kind: kindCond,
      other: d => !d
    };
    var pfFalse = {
      name: nameCond,
      v: vCond,
      kind: kindCond,
      other: d => !!d
    };
    expect(where(pfTrue)(obj)).toBe(true);
    expect(where(pfFalse)(obj)).toBe(false);
  });
})
