// Returns an array [e_i] such that e_i = f(lst_i)

function all(p, iter) {
    var e = iter.next(),
        ev = e.value;
    while(!e.done) {
        if (!p(ev)) {
            return false;
        }
        e = iter.next();
    }
    return true;
}

module.exports = require('../curry2').bind(this, all);
