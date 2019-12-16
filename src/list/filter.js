module.exports = require('../f/curry')(function *filter(predicate, iter) {
	let index = 0
	for (let item of iter) {
		if (predicate(item, index++, iter)) {
			yield item
		}
	}
})
