var curry4 = require('../../util/curry4');


describe('curry4', function() {
  it('curries a 4 parameter function', function() {
    var addition = (a, b, c) => a + b + c;
    var p1 = 5;
    var p2 = 8;
    var p3 = 3;
    var p4 = 13;
    var curriedAddition = curry4.bind(this, addition);
    var result = addition(p1, p2, p3, p4);

    expect(curriedAddition(p1, p2, p3, p4)).toEqual(result);
    expect(curriedAddition(p1)(p2, p3, p4)).toEqual(result);
    expect(curriedAddition(p1, p2)(p3, p4)).toEqual(result);
    expect(curriedAddition(p1)(p2)(p3, p4)).toEqual(result);
    expect(curriedAddition(p1, p2, p3)(p4)).toEqual(result);
    expect(curriedAddition(p1)(p2, p3)(p4)).toEqual(result);
    expect(curriedAddition(p1, p2)(p3)(p4)).toEqual(result);
    expect(curriedAddition(p1)(p2)(p3)(p4)).toEqual(result);
  });
})
