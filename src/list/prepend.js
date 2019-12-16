module.exports = require('../f/curry')(function *prepend(prefix, postfix) {
    for (let item of prefix) {
        yield item
    }
    for (let item of postfix) {
        yield item
    }
})
