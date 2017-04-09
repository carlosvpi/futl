module.exports = function(f, a, b, c) {
    if (b === undefined) {
        return require('./curry2')(f.bind(this, a));
    }
    if (c === undefined) {
        return f.bind(this, a, b);
    }
    return f(a, b, c);
};
