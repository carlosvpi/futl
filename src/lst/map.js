// Returns an array [e_i] such that e_i = f(lst_i)

function _map(f, lst) {
    for (var i = 0, le = lst.length, r = Array(le); i < le; i++) {
        r[i] = f(lst[i]);
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _map);
