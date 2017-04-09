function _compose(fs, v) {
    for (var i = fs.length-1; i >= 0; i--) {
        v = fs[i](v);
    }
    return v;
};

module.exports = function compose() {
    var fs = arguments;

    return _compose.bind(this, fs);
};
