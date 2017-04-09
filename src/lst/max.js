// Find the max of an array. max ([f], lst), where f === <

var functionConstructor = require('../../util/type').functionConstructor,
    ord = require('../../util/ord');

function _max(f, lst) {
    for (var i = 1, le = lst.length, r = lst[0], e; i < le; i++) {
        e = lst[i];
        if (f(r, e) > 0) {
            r = e;
        }
    }
    return r;
}

module.exports = function max(f, lst) {
	if (f.constructor !== functionConstructor) {
		return _max(ord, lst);
	} else {
		return _max(f, lst);
	}
};
