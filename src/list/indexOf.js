// Returns an array [e_i] such that e_i = f(lst_i)

var functionConstructor = require('../type').functionConstructor;

function indexOf(p, iter) {
    var e = iter.next(),
        ev = e.value,
        i = 0;
    while(!e.done) {
        if (p.constructor === functionConstructor) {
            if (p(ev)) {
                return i;
            }
        } else {
            if (ev === p) {
                return i;
            }
        }
        e = iter.next();
        i++;
    }
}

module.exports = require('../curry2').bind(this, indexOf);
