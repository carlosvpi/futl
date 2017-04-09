// multipend([a, b, c]) == [...a, ...b, ...c]

module.exports = function multipend(ll) {
    var llle = ll.length,
        rle = 0,
        lx,
        i,
        lxle,
        r,
        ri;

    for(var li = 0; li < llle; li ++) {
        rle += ll[li].length;
    }
    r = Array(rle);
    for (li = 0, ri = 0; li < llle; li++) {
        for(i = 0, lx = ll[li], lxle = lx.length; i < lxle; i++, ri++) {
            r[ri] = lx[i];
        }
    }
    return r;
};
