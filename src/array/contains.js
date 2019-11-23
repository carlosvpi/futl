// Return the index of e if e is present on lst; -1 otherwise

var functionConstructor = require('../../util/type').functionConstructor;

function _contains(e, lst) {
    var i = 0, le = lst.length;
    if (e.constructor === functionConstructor) {
        for (; i < le; i++) {
            if (e(lst[i])) return true;
        }
    } else {
        for (; i < le; i++) {
            if (lst[i] === e) return true;
        }
    }
    return false;
}

module.exports = require('../../util/curry2').bind(this, _contains);
