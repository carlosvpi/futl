const Stream = require('./stream')

module.exports = function times (...streams) {
	const value = streams.map(({ value }) => value)
	let numDoneStreams = streams.reduce((acc, { isDone }) => acc + +isDone, 0)
	const str = new Stream(value)
	for (let i = 0; i < streams.length; i++) {
		(index => {
			streams[index].subscribe(partialValue => {
				value[index] = partialValue
				str.update(value)
			}).onDone(() => {
				numDoneStreams++
				if (numDoneStreams === streams.length) {
					str.done()
				}
			})
		})(i)
	}
	return str
}
