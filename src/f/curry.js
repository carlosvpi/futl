module.exports = function curry(f) {
    var self = this;

    return function() {
        if (arguments.length >= f.length) {
            return f.apply(self, arguments);
        } else {
            for (var g = f, i = 0, le = arguments.length; i < le; i++) {
                g = g.bind(self, arguments[i]);
            }
            return curry(g);
        }
    };
};
