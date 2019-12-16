const Stream = require('../../src/stream/stream')
const reduce = require('../../src/stream/reduce')

describe('stream | reduce', function() {
  it('multiplies two streams', function() {
    const s = new Stream(0)
    const acc = (acc, value) => acc + value
    const r = reduce(acc, s)
    const x = 5, y = 2, z = 7

    expect(r.isDone).toEqual(false)
    s.update(x)
    expect(r.value).toEqual(x)
    s.update(y)
    expect(r.value).toEqual(acc(x, y))
    s.update(z)
    expect(r.value).toEqual(acc(acc(x, y), z))
    s.done()
    expect(r.isDone).toEqual(true)
  })
})