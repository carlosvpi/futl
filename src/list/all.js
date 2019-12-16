module.exports = require('../f/curry')(function all(predicate, iter) {
	let index = 0
    for (let item of iter) {
    	if (!predicate(item, index++, iter)) {
    		return false
    	}
    }
    return true
})
