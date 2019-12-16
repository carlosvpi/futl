module.exports = require('../f/curry')(function* map (f, iter) {
	for (let item of list) {
		yield f(item)
	}
})
