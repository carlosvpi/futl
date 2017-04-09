// Returns an array with those elements e of lst such that f(e) holds

function _filter(f, lst) {
    for (var x, i = 0, le = lst.length, r = []; i < le; i++) {
        x = lst[i];
        if (f(x)) {
            r.push(x);
        }
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _filter);
