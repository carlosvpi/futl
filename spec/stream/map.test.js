const Stream = require('../../src/stream/stream')
const map = require('../../src/stream/map')

describe('stream | map', function() {
  it('maps the values of a stream', function() {
    const stream = new Stream(0)
    const f = value => value * 2
    const m = map(f, stream)
    const x = 5, y = 2

    stream.update(x)
    expect(m.value).toBe(f(x))
    stream.update(y)
    expect(m.value).toBe(f(y))
  })

  it('Finishes the map on stream done', function() {
    const stream = new Stream(0)
    const f = value => value * 2
    const m = map(f, stream)
    const x = 5

    expect(m.isDone).toBe(false)
    stream.update(x)
    expect(m.value).toBe(f(x))
    stream.done()
    expect(m.isDone).toBe(true)
  })
})