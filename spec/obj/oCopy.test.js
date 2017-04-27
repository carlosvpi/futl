var oCopy = require('../../src/obj/oCopy');

describe('oCopy', function() {
  it('copies an object', function() {
    var obj = {
      name: 'object',
      v: [1, 2],
      kind: { prop: 0 },
      other: 0
    };

    expect(oCopy(obj)).toEqual(obj);
    expect(oCopy(obj)).not.toBe(obj);
  });
})
