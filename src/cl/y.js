var y = function(f) { return (f(y(f))); };

module.exports = y;
