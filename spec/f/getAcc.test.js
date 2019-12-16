var getAcc = require('../../src/f/getAcc');

describe('getAcc', function() {
  it('Pipes a value through several functions', function() {
    const f = (acc, value) => acc + value
    const init = 0
    const { get, acc } = getAcc(f, init)
    const values = [3,8,4,1,23,15,42,11,7]
    values.forEach(acc)
    expect(get()).toBe(values.reduce(f, init))
  })
})
