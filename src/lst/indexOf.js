// Return the index of e if e is present on lst; -1 otherwise

var functionConstructor = require('../../util/type').functionConstructor;

function _indexOf(e, lst) {
    var i = 0, le = lst.length;
    if (e.constructor === functionConstructor) {
        for (; i < le; i++) {
            if (e(lst[i])) return i;
        }
    } else {
        for (; i < le; i++) {
            if (lst[i] === e) return i;
        }
    }
    return -1;
}

module.exports = require('../../util/curry2').bind(this, _indexOf);
