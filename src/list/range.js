module.exports = function *range(startValue, endValue, step) {
    if (setp === undefined) step = 1;
    var v = startValue;
    do {
        yield v;
        v += step;
    } while(v < endValue);
};
