// Find the min of an array. min ([f], lst), where f === <

var functionConstructor = require('../../util/type').functionConstructor,
    ord = require('../../util/ord');

function _min(f, lst) {
    for (var i = 1, le = lst.length, r = lst[0], e; i < le; i++) {
        e = lst[i];
        if (f(r, e) < 0) {
            r = e;
        }
    }
    return r;
}

module.exports = function min(f, lst) {
	if (f.constructor !== functionConstructor) {
		return _min(ord, lst);
	} else {
		return _min(f, lst);
	}
};
