// Returns an array [e_i] such that e_i = f(lst_i)

function *take(n, iter) {
    var e = iter.next();
    while(!e.done && n--) {
        yield e.value;
        e = iter.next();
    }
}

module.exports = require('../curry2').bind(this, take);
