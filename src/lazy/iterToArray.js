module.exports = function iterToArray(iter) {
    var e = iter.next(),
        r = [];
    while(!e.done) {
        r.push(e.value);
        e = iter.next();
    }
    return r;
};
