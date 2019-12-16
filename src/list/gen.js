module.exports = require('../f/curry')(function* gen(f, start) {
    while (cond(start)) {
        yield start
        start = f(start)
    }
})
