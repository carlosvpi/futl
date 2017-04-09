// Returns the last element of an iterator (can be infinite)

module.exports = function iLast(iter) {
    var e = iter.next(),
        ev;
    while(!e.done) {
        ev = e.value;
        e = iter.next();
    }
    return ev;
};
