// Return true if any elements of lst fulfil f

function _any(f, lst) {
    for (var i = 0, le = lst.length; i < le; i++) {
        if (f(lst[i])) return true;
    }
    return false;
}

module.exports = require('../../util/curry2').bind(this, _any);
