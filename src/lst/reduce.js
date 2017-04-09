function _reduce(f, startValue, lst) {
    var s,
        i;

    if (startValue === undefined) {
        s = lst[0];
        i = 1;
    } else {
        s = startValue;
        i = 0;
    }
    for (var le = lst.length; i < le; i++) {
        s = f(s, lst[i], i, lst);
    }
    return s;
}

module.exports = function reduce(f, startValue, lst) {
    if (lst === undefined) {
        return _reduce.bind(this, f, startValue);
    } else {
        return _reduce(f, startValue, lst);
    }
};
