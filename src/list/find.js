// Returns an array [e_i] such that e_i = f(lst_i)

function find(p, iter) {
    var e = iter.next(),
        ev = e.value;
    while(!e.done) {
        if (p(ev)) {
            return ev;
        }
        e = iter.next();
    }
}

module.exports = require('../curry2').bind(this, find);
