function* getUntil(cond, iter) {
    var e = iter.next();
    var i = 0;
    while(!e.done && cond(e, i++)) {
        yield e.value;
        e = iter.next();
    }
}

module.exports = require('../../util/curry2').bind(this, getUntil);
