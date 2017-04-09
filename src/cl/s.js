module.exports = require('../../util/curry3')(function(x, y, z) { return (x(z))(y(z)); });
