// Returns the first element fulfilling f

function _find(f, lst) {
    for (var x, i = 0, le = lst.length; i < le; i++) {
        x = lst[i];
        if (f(x)) {
            return x;
        }
    }
}

module.exports = require('../../util/curry2').bind(this, _find);
