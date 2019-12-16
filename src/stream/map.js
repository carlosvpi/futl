const Stream = require('./stream')
const curry = require('../f/curry')

module.exports = curry(function map (f, str1) {
	const str2 = new Stream (f(str1.value))
	str1.subscribe((...arguments) => {
		str2.update(f(...arguments))
	}).onDone(() => {
		str2.done()
	})
	return str2
})
