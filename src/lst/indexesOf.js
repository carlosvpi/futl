// Return the array of indexes e_i such that lst_(e_i) fulfils f

var functionConstructor = require('../../util/type').functionConstructor;

function _indexesOf(f, lst) {
    var i = 0, le = lst.length, r = [];

    if (f.constructor === functionConstructor) {
        for (; i < le; i++) {
            if (f(lst[i])) {
                r.push(i);
            }
        }
    } else {
        for (; i < le; i++) {
            if (lst[i] === f) {
                r.push(i);
            }
        }
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _indexesOf);
