const curry = require('../../src/f/curry')

describe('curry', function() {
  const f = (a, b, c) => Math.pow(2, a) * Math.pow(3, b) * Math.pow(5,c)
  const x = 7, y = 5, z = 3
  const curriedF = curry(f)
  const expectation = f(x, y, z)

  it('Curries 0 arguments', function() {
    expect(curriedF()(x, y, z)).toBe(expectation)
  })
  it('Curries one argument', function() {
    expect(curriedF(x)(y, z)).toBe(expectation)
  })
  it('Curries two arguments', function() {
    expect(curriedF(x, y)(z)).toBe(expectation)
  })
  it('Curries all three arguments', function() {
    expect(curriedF(x, y, z)).toBe(expectation)
  })

  it('Curries two arguments and is bound', function() {
    const bF = function bF (a, b) {
      return Math.pow(2, this.v) * Math.pow(3, a) * Math.pow(5,b)
    }
    const object = { v: 1 }
    const curriedBF = curry.bind(object)(bF)

    expect(curriedBF(x)(y)).toBe(bF.call(object, x, y))
  })

  it('Curries a generator', function() {
  	const gF = function* gF (a, b) {
  		return Math.pow(2, a) * Math.pow(3,b)
  	}
  	const curriedGF = curry(gF)

    expect(curriedGF(x)(y)).toEqual(gF(x, y))
  })

})
