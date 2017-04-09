// Iterates through {a_1, ...}, where a_i = f(a_(i-1)), while cond(a_i) of a_i === cond

var always = function() { return true; }
var eq = function(a, b) { return a === b; };
var functionConstructor = require('../type').functionConstructor;

module.exports = *iGen(f, cond, start) {
    var e = start;
    if (cond === undefined) {
        cond = id.bind(this, true);
    } else if (cond.constructor !== functionConstructor) {
        cond = eq.bind(this, cond);
    }
    while(cond(e)) {
        yield e;
        e = f(e);
    }
}
