// Returns an array [e_i] such that e_i = f(iter_i)

function *_slice(start, end, step, iter) {
    var e = iter.next(),
        ev = e.value,
        iStep,
        i = 0;
    while(!e.done && i++ < start) {
        e = iter.next();
    }
    while(!e.done && i < end) {
        yield e.value;
        iStep = 0;
        while(iStep < step) {
            e = iter.next();
        }
        i += step;
    }
}

module.exports = function slice(start, end, step, iter) {
    if (end === undefined) {
        end = Infinity;
    }
    if (step === undefined) {
        step = 1;
    }
    if (start === undefined) {
        start = 0;
    }
    if (iter === undefined) {
        return _slice.bind(this, start, end, step);
    }
    return _slice(start, end, step, iter);
};
