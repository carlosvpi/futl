const Stream = require('../../src/stream/stream')

describe('stream | Stream', function() {
  it('streams its values', function() {
    let numUpdates = 0
    const expectedUpdates = 4
    const stream = new Stream(0)
    	.subscribe(() => numUpdates++)

    for (let i = 0; i < expectedUpdates; i++) {
    	stream.update(i)
    }

    expect(numUpdates).toBe(expectedUpdates)
  })

  it('does not broadcast when it is done', function() {
    let numUpdates = 0
    const expectedUpdates = 4
    const stream = new Stream(0)
    	.subscribe(() => numUpdates++)

    for (let i = 0; i < expectedUpdates; i++) {
    	stream.update(i)
    }
    stream.done()
    stream.update(0)

    expect(numUpdates).toBe(expectedUpdates)
    expect(stream.isDone).toBe(true)
    expect(stream.value).toBe(expectedUpdates - 1)
  })

  it('streams while streaming', function() {
    let numUpdates = 0
    const expectedUpdates = 2
    const stream = new Stream(0)
    	.subscribe((shouldUpdate) => {
    		numUpdates++
    		if (shouldUpdate) {
    			stream.update()
    		}
    	})

	stream.update(true)

    expect(numUpdates).toBe(expectedUpdates)
  })

  it('broadcasts when (and only when) it is done', function() {
    let numUpdates = 0
    let finalValue = 0
    const expectedUpdates = 2
    const stream = new Stream(0)
    	.subscribe(() => {
    		numUpdates++
    	}).onDone(() => {
    		finalValue = numUpdates
    	})

    for (let i = 0; i < expectedUpdates; i++) {
    	stream.update(i)
    }

    expect(finalValue).toBe(0)
    stream.done()
    expect(finalValue).toBe(expectedUpdates)
  })
})
