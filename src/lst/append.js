// append(a, b) == [...b, ...a]

function _append(la, lb) {
    var lal = la.length,
        lbl = lb.length,
        r = Array(lal + lbl);

    for (var i = 0; i < lbl; i++) {
        r[i] = lb[i];
    }

    for (var j = 0; i < lal; i++, j++) {
        r[i] = la[j];
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _append);
