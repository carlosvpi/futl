module.exports = function(f, a, b, c, d) {
    if (b === undefined) {
        return require('./curry3')(f.bind(this, a));
    }
    if (c === undefined) {
        return require('./curry2')(f.bind(this, a, b);
    }
    if (d === undefined) {
        return f.bind(this, a, b, c);
    }
    return f(a, b, c, d);
};
