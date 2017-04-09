module.exports = function memoize(f) {
    var memoization = {},
        self = this,
        args;

    return function() {
        args = JSON.stringify(arguments);
        memoization[args] = memoization[args] || f.apply(self, arguments);
        return memoization[args];
    };
};
