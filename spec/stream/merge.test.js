const Stream = require('../../src/stream/stream')
const merge = require('../../src/stream/merge')

describe('stream | merge', function() {
  it('merges two streams', function() {
    const s1 = new Stream(0)
    const s2 = new Stream(0)
    const m = merge(s1, s2)
    const x1 = 5, x2 = 2, y1 = 8, y2 = 7

    expect(m.isDone).toBe(false)
    expect(m.value).toBe(null)
    s1.update(x1)
    expect(m.value).toBe(x1)
    s2.update(y1)
    expect(m.value).toBe(y1)
    s2.update(y2)
    expect(m.value).toBe(y2)
    s1.update(x2)
    expect(m.value).toBe(x2)
    s1.done()
    expect(m.value).toBe(x2)
    expect(m.isDone).toBe(false)
    s2.done()
    expect(m.value).toBe(x2)
    expect(m.isDone).toBe(true)
  })
})