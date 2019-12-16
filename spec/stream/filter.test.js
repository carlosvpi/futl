const Stream = require('../../src/stream/stream')
const filter = require('../../src/stream/filter')

describe('stream | filter', function() {
  it('filters the even values of a stream', function() {
    const stream = new Stream(0)
    const p = value => value % 2 === 0
    const filtered = filter(p, stream)
    const x = 5, y = 2

    expect(filtered.value).toBe(0)
    stream.update(x)
    expect(filtered.value).toBe(0)
    stream.update(y)
    expect(filtered.value).toBe(y)
  })

  it('Finishes the filter on stream done', function() {
    const stream = new Stream(0)
    const p = value => value % 2 === 0
    const filtered = filter(p, stream)
    const x = 5, y = 2

    expect(filtered.isDone).toBe(false)
    stream.update(x)
    expect(filtered.value).toBe(0)
    stream.done()
    expect(filtered.isDone).toBe(true)
  })
})