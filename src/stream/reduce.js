const Stream = require('./stream')
const curry = require('../f/curry')

module.exports = curry(function reduce (acc, str1) {
	const str2 = new Stream(str1.value)
	str1.subscribe((value, ...rest) => {
		str2.update(acc(str2.value, value, ...rest))
	}).onDone(() => {
		str2.done()
	})
	return str2
})
