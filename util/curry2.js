module.exports = function(f, a, b) {
    if (b === undefined) {
        return f.bind(this, a);
    }
    return f(a, b);
};
