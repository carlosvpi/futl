module.exports = function *fromArray(array) {
    for (let i = 0, length = array.length; i < length; i++) {
        yield array[i]
    }
}
