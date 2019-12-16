module.exports = require('../f/curry')(function *append(postfix, prefix) {
    for (let item of prefix) {
        yield item
    }
    for (let item of postfix) {
        yield item
    }
})
