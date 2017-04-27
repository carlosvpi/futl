var has = require('../../src/obj/has');

describe('Has', function() {
  it('tests if an object has properties', function() {
    var person = {
        name: 'abraham',
        age: 84
    };

    expect(has('name', person)).toBe(true);
    expect(has('surname', person)).toBe(false);
    expect(has(['name', 'age'], person)).toBe(true);
    expect(has(['name', 'age', 'surname'], person)).toBe(false);
  });
})
