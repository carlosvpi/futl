function _take(n, lst) {
    for (var i = 0, lstle = lst.length, le = n < lstle ? n : lstle, r = Array(le); i < le; i++) {
        r[i] = lst[i];
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _take);
