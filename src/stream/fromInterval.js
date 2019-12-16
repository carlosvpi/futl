const Stream = require('./stream')

module.exports = function fromInterval (interval) {
	const str = new Stream(0)
	const token = setInterval(() => {
		str.update(str.value + 1)
	}, interval)
	str.onDone(() => {
		clearInterval(token)
	})
	return str
}