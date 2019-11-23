// iReduce(f, iter) yields f(acc, iter[i]) for each iter element, and acc = f(acc, iter[i]) for the next

function *_reduce(f, startValue, iter) {
    var e = iter.next(),
        acc = startValue;
    while(!e.done) {
        acc = f(acc, e.value);
        yield acc;
        e = iter.next();
    }
}

module.exports = function reduce(f, startValue, iter) {
    if (iter === undefined) {
        return _reduce.bind(this, f, startValue);
    } else {
        return _reduce(f, startValue, iter);
    }
};
