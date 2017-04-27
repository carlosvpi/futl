var curry2 = require('../../util/curry2');


describe('curry2', function() {
  it('curries a 2 parameter function', function() {
    var addition = (a, b) => a + b;
    var p1 = 5;
    var p2 = 8;
    var curriedAddition = curry2.bind(this, addition);
    var result = addition(p1, p2);

    expect(curriedAddition(p1, p2)).toEqual(result);
    expect(curriedAddition(p1)(p2)).toEqual(result);
  });
})
