// Iterates through {a_1, ...}, where a_i = f(a_(i-1)), while cond(a_i) of a_i === cond

var eq = require('../../util/eq');
var functionConstructor = require('../../util/type').functionConstructor;

module.exports = function unfold(f, cond, start) {
    var e = start,
        r = [];
    if (cond === undefined) {
        cond = Number;
    } else if (cond.constructor !== functionConstructor) {
        cond = eq.bind(this, cond);
    }
    while(cond(e)) {
        r.push(e);
        e = f(e);
    }
    return r;
};
