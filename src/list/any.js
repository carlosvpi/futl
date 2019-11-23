// Returns an array [e_i] such that e_i = f(lst_i)

function any(p, iter) {
    var e = iter.next(),
        ev = e.value;
    while(!e.done) {
        if (p(ev)) {
            return true;
        }
        e = iter.next();
    }
    return false;
}

module.exports = require('../curry2').bind(this, any);
