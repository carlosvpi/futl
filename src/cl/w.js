module.exports = require('../../util/curry2')(function W(x, y) { return (x(y))(y); });
