// Returns an array [e_i] such that e_i = f(lst_i)

var functionConstructor = require('../type').functionConstructor;

function *_iIndexesOf(p, iter) {
    var e = iter.next(),
        ev = e.value,
        i = 0;
    if (p.constructor === functionConstructor) {
        while(!e.done) {
            if (p(ev)) {
                yield i;
            }
            e = iter.next();
            i++;
        }
    } else {
        while(!e.done) {
            if (ev === p) {
                yield i;
            }
            e = iter.next();
            i++;
        }
    }
}

module.exports = require('../curry2').bind(this, _iIndexesOf);
