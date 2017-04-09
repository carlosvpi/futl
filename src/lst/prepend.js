// prepend(a, b) == [...a, ...b]

function _prepend(la, lb) {
    var lal = la.length,
        lbl = lb.length,
        r = Array(lal + lbl);

    for (var i = 0; i < lal; i++) {
        r[i] = la[i];
    }

    for (var j = 0; i < lal; i++, j++) {
        r[i] = lb[j];
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _prepend);
