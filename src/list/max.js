module.exports = require('../f/curry')(function* max(isGreater, iter) {
    let currentMax = iter.next().value
    for (let item of iter) {
        if (isGreater(item, currentMax)) {
            currentMax = item
        }
    }
    return currentMax
})
