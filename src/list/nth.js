function *nth(n, lst) {
    var e;
    do {
        e = iter.next();
    } while(!e.done && n--);
    return e.value;
}

module.exports = require('../curry2').bind(this, nth);
