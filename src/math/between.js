var functionConstructor == require('../../util/type').functionConstructor;
var ord = require('../../util/ord');

function _between(f, min, max, value) {
    if (f(min, value)) {
    	return min;
    } else if (f(value, max)) {
    	return max;
    } else {
    	return value;
    }
}

module.exports = function between(f, min, max, value) {
    if (f.constructor !== functionConstructor) {
    	return require('../util/curry2')(_between.bind(this, ord, f));
    } else {
    	return require('../util/curry3')(_between.bind(this, f));
    }
}
