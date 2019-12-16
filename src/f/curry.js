module.exports = function curry(f) {
    return (...arguments) => arguments.length >= f.length
        ? f.apply(this, arguments)
        : curry(f.bind(this, ...arguments))
}
