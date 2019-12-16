const memoize = require('../../src/f/memoize')

describe('memoize', function() {
  const value = 2

  it('Memoize calls a function once per unique arguments', function() {
    let calls = 0
    const f = (a, b) => {
      calls ++
      return Math.pow(2, a) * Math.pow(3, b)
    }
    const x = 1, y = 2
    const memo = memoize(f)

    expect(memo(x, y)).toBe(f(x, y))

    const totalCalled = calls

    memo(x, y)

    expect(calls).toBe(totalCalled)
  })

  it('Memoize remembers all unique argument invokations', function() {
    const f = (a, b) => Math.pow(2, a) * Math.pow(3, b)
    const x = 1, y = 2
    const memo = memoize(f)

    expect(memo(x, y)).toBe(f(x, y))
    expect(memo(y, x)).toBe(f(y, x))
    expect(memo(x, y)).toBe(f(x, y))
  })

  it('Throws circular argument error', function() {
    const f = (a) => a.v
    const object = {}
    object.v = object
    const memo = memoize(f)

    try {
      memo(object)
    } catch ({ message }) {
      expect(message).toBe('Unable to use [object Object] as memoization key')
    }
  })
})
