var curry3 = require('../../util/curry3');


describe('curry3', function() {
  it('curries a 3 parameter function', function() {
    var addition = (a, b, c) => a + b + c;
    var p1 = 5;
    var p2 = 8;
    var p3 = 3;
    var curriedAddition = curry3.bind(this, addition);
    var result = addition(p1, p2, p3);

    expect(curriedAddition(p1, p2, p3)).toEqual(result);
    expect(curriedAddition(p1)(p2, p3)).toEqual(result);
    expect(curriedAddition(p1, p2)(p3)).toEqual(result);
    expect(curriedAddition(p1)(p2)(p3)).toEqual(result);
  });
})
