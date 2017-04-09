// iReduce(f, iter) yields f(acc, iter[i]) for each iter element, and acc = f(acc, iter[i]) for the next

function *_iReduce(f, startValue, iter) {
    var e = iter.next(),
        acc = startValue;
    while(!e.done) {
        acc = f(acc, e.value);
        yield acc;
        e = iter.next();
    }
}

module.exports = function iReduce(f, startValue, iter) {
    if (iter === undefined) {
        return _iReduce.bind(this, f, startValue);
    } else {
        return _iReduce(f, startValue, iter);
    }
};
