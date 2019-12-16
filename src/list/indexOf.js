module.exports = require('../f/curry')(function indexOf(predicate, iter) {
    let index = 0
    for (let item of iter) {
        if (predicate(item, index++, iter)) {
            return index
        }
    }
    return -1
})
