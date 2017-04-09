// Returns an array with [lst_(p_i)] where p is an array of indexes

function _permute(perm, lst) {
    for (var i = 0, le = perm.length, r = Array(le); i < le; i++) {
        r[i] = lst[perm[i]];
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _permute);
