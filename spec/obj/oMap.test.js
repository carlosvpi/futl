var oMap = require('../../src/obj/oMap');

var id = d => d;
var traspose = d => [d[1], d[0]];
var incProp = d => ({ prop: d.prop + 1 });

describe('oMap', function() {
  it('maps an object', function() {
    var obj = {
      name: 'object',
      v: [1, 2],
      kind: { prop: 0 },
      other: 0
    };
    var pmap = {
      name: id,
      v: traspose,
      kind: incProp
    }
    expect(oMap(pmap)(obj)).toEqual({
      name: id(obj.name),
      v: traspose(obj.v),
      kind: incProp(obj.kind)
    });
  });
})
