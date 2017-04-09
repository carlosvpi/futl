function _slice(start, end, step, lst) {
    for (var li = start, ri = 0, r = Array(end - start); li < end; li += step, ri++) {
        r[ri] = lst[li];
    }
    return r;
}

module.exports = function slice(start, end, step, lst) {
    if (end === undefined) {
        end = lst.length;
    }
    if (step === undefined) {
        step = 1;
    }
    if (start === undefined) {
        start = 0;
    }
    if (lst === undefined) {
        return _slice.bind(this, start, end, step);
    }
    return _slice(start, end, step, lst);
};
