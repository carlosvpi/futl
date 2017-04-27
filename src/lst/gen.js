// Iterates through {a_1, ...}, where a_i = f(a_(i-1)), while cond(a_i) of a_i === cond

var functionConstructor = require('../../util/type').functionConstructor;

module.exports = function gen(f, cond) {
    var e, r, i;

    if (cond === undefined) {
        cond = Number;
    } else if (cond.constructor !== functionConstructor) {
        r = Array(cond);

        for (i = 0; i < cond; i++) {
            r[i] = f(i, r);
        }

        return r;
    }

    i = 0;
    r = [];
    e = f(i++, r);

    while (cond(e)) {
        r.push(e);
        e = f(i++, r);
    }

    return r;
};
