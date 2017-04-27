var set = require('../../src/obj/set');

describe('Set', function() {
  it('sets some properties on an object', function() {
    var person = {};
    var props = ['name', 'age'];
    var values = ['Adam', '31'];
    var props0 = props[0];
    var values0 = values[0];
    var partiallySetPerson = set(props0, values0, person);
    var setPerson = set(props, values, person);

    expect(partiallySetPerson).not.toBe(person);
    expect(setPerson).not.toBe(person);
    expect(partiallySetPerson[props0]).toBe(values0);
    expect(setPerson[props[0]]).toBe(values[0]);
    expect(setPerson[props[1]]).toBe(values[1]);
  });
})
