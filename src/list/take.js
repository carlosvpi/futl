module.exports = require('../f/curry')(function *take(n, iter) {
    let index = -1
    for (let item of iter) {
    	index++
    	if (index === n) {
    		return
    	}
    	yield item
    }
})
