var functionConstructor = require('../../util/type').functionConstructor,
    ord = require('../../util/ord');

function _isSorted(f, lst) {
    var previous = lst[0],
        current;
    for (var i = 1, le = lst.length; i < le; i++) {
        current = lst[i];
        if (f(previous, current) > 0) {
            return false;
        }
        previous = current;
    }
    return true;
}


module.exports = function isSorted(f, lst) {
    if (f.constructor === functionConstructor) {
        if (lst !== undefined) {
            return _isSorted(f, lst);
        } else {
            return _isSorted.bind(this, f);
        }
    } else {
        return _isSorted(ord, f);
    }
};
