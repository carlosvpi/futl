const Stream = require('./stream')
const curry = require('../f/curry')

module.exports = curry(function filter (predicate, str1) {
	const str2 = new Stream(predicate(str1.value) ? str1.value : null)
	str1.subscribe((value, ...rest) => {
		if (predicate(value, ...rest)) {
			str2.update(value)
		}
	}).onDone(() => {
		str2.done()
	})
	return str2
})
