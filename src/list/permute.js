module.exports = require('../f/curry')(function permute (indexes, array) {
	for (let metaIndex = 0; metaIndex < indexes.length; metaIndex++) {
		yield array[indexes[metaIndex]]
	}
})
