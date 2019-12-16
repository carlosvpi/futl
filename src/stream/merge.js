const Stream = require('./stream')

module.exports = function merge (...streams) {
	const str = new Stream(null)
	let numDoneStreams = streams.reduce((acc, { isDone }) => acc + +isDone, 0)
	for (let i = 0; i < streams.length; i++) {
		streams[i].subscribe(value => {
			str.update(value)
		}).onDone(() => {
			numDoneStreams++
			if (numDoneStreams === streams.length) {
				str.done()
			}
		})
	}
	return str
}
