var log = require('../../src/math/log');

describe('Log', function() {
  it('Computes the logarithm of a number', function() {
    var n = 1024;

    expect(log(n)).toEqual(Math.log(n));
  });
})
