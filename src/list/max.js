// Returns an array [e_i] such that e_i = f(lst_i)

function max(f, iter) {
    var e = iter.next(),
        ev = e.value,
        r = ev;
    while(!e.done) {
        if (f(r, ev)) {
            r = ev;
        }
        e = iter.next();
        ev = e.value;
    }
    return r;
}

module.exports = require('../curry2').bind(this, max);
