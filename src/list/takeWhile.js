module.exports = require('../f/curry')(function takeWhile(predicate, iter) {
	let index = 0
	for (let item of iter) {
		if (!predicate(item, index++, iter)) {
			return
		}
		yield item
	}
})
