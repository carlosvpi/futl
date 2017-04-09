// Return true if all elements of lst fulfil f

function _all(f, lst) {
    for (var i = 0, le = lst.length; i < le; i++) {
        if (!f(lst[i])) return false;
    }
    return true;
}

module.exports = require('../../util/curry2').bind(this, _all);
