// Returns an array [e_i] such that e_i = f(lst_i)

function *_iMap(f, iter) {
    var e = iter.next();
    while(!e.done) {
        yield f(e.value);
        e = iter.next();
    }
}

module.exports = require('../curry2').bind(this, _iMap);
