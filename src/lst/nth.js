function _nth(n, lst) {
    return lst[n];
}

module.exports = require('../../util/curry2').bind(this, _nth);
