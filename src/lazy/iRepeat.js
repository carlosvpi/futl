// Repeats an operation on a given iterator p times, or while p(iter_i, i); returns the length of the iterator

var functionConstructor = require('../type').functionConstructor;

function defaultCondition(n, x, i) { return i < n; }

function _iRepeat(f, p, iter) {
    var e = iter.next(),
        i = 0,
        cond = p.constructor === functionConstructor ? defaultCondition.bind(this, p) : p;
    while(!e.done && cond(e.value, i)) {
        f(e.value);
        e = iter.next();
        i++;
    }
    return i;
}

module.exports = require('../curry3').bind(this, _iRepeat);
