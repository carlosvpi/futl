module.exports = require('../f/curry')(function *nth(n, iter) {
	let index = 0
	for (let item of iter) {
		index++
		if (index === n) {
			return item
		}
	}
})
