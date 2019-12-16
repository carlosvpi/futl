module.exports = require('../f/curry')(function* (acc, start, iter) {
    let index = 0
    for (let item of iter) {
        start = acc(start, item, index, iter)
        yield start
    }
})