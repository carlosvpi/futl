module.exports = function last(iter) {
    let e = iter.next()
    let ev
    while(!e.done) {
        ev = e.value
        e = iter.next()
    }
    return ev
}
