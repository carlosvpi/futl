function *reject(p, iter) {
    var e = iter.next(),
        ev = e.value;
    while(!e.done) {
        if (!p(ev)) {
            yield ev;
        }
        e = iter.next();
    }
}

module.exports = require('../curry2').bind(this, reject);
