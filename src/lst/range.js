module.exports = function range(startValue, endValue, step) {
    if (step === undefined) step = 1;
    var le = (endValue - startValue) / step + 1;
    var a = Array(le);
    var v = startValue;
    for (var i = 0; i < le; i++) {
        a[i] = v;
        v += step;
    }
    return a;
};
