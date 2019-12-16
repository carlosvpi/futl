const compose = require('../../src/f/compose')

describe('compose', function() {
  const value = 2

  it('Composes three functions', function() {
    const exp2 = (v) => Math.pow(2, v)
    const exp3 = (v) => Math.pow(3, v)
    const exp5 = (v) => Math.pow(5, v)
    const composed = compose(exp5, exp3, exp2)
    
    expect(composed(value)).toBe(exp5(exp3(exp2(value))))
  })

  it('Composes two bound functions', function() {
    const bF1 = (function bF1 (v) {
      return Math.pow(2, this.v) * Math.pow(7, v)
    }).bind({ v: 2 })
    const bF2 = (function bF2 (v) {
      return Math.pow(5, this.w) * Math.pow(3, v)
    }).bind({ w: 3 })
    const composedB = compose(bF1, bF2)

    expect(composedB(value)).toBe(bF2(bF2(value)))
  })

  it('Composes with an n-ary last function', function() {
    const binary = (x, y) => x * y
    const unary = (x) => x + 1
    const composed = compose(unary, binary)
    const value2 = 5

    expect(composed(value, value2)).toBe(unary(binary(value, value2)))
  })

})
