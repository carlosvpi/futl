const Stream = require('../../src/stream/stream')
const times = require('../../src/stream/times')

describe('stream | times', function() {
  it('multiplies two streams', function() {
    const s1 = new Stream(0)
    const s2 = new Stream(0)
    const m = times(s1, s2)
    const x1 = 5, x2 = 2, y1 = 8, y2 = 7

    expect(m.isDone).toEqual(false)
    expect(m.value).toEqual([0, 0])
    s1.update(x1)
    expect(m.value).toEqual([x1, 0])
    s2.update(y1)
    expect(m.value).toEqual([x1, y1])
    s2.update(y2)
    expect(m.value).toEqual([x1, y2])
    s1.update(x2)
    expect(m.value).toEqual([x2, y2])
    s1.done()
    expect(m.value).toEqual([x2, y2])
    expect(m.isDone).toEqual(false)
    s2.done()
    expect(m.value).toEqual([x2, y2])
    expect(m.isDone).toEqual(true)
  })
})