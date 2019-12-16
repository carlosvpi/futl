module.exports = require('../f/curry')(function* max(isGreater, iter) {
    let currentMin = iter.next().value
    for (let item of iter) {
        if (isGreater(currentMin, item)) {
            currentMin = item
        }
    }
    return currentMin
})
