// Performs keyBy, accepting a label, a function, or a list of laberls or functions, to keyize the result

var type = require('../../util/type'),
    arrayConstructor = type.arrayConstructor,
    functionConstructor = type.functionConstructor;

function _keyBy(p, lst) {
    var i = 0, le = lst.length, r = {}, e, pi, plm1, pe, key, rinstance;
    if (p.constructor !== arrayConstructor) {
        if (p.constructor === functionConstructor) {
            for (; i < le; i++) {
                e = lst[i];
                key = p(e);
                r[key] = e;
            }
        } else {
            for (; i < le; i++) {
                e = lst[i];
                key = e[p];
                r[key] = e;
            }
        }
    } else {
        plm1 = p.length - 1;
        for (; i < le; i++) {
            e = lst[i];
            rinstance = r;
            for(pi = 0; pi < plm1; pi++) {
                pe = p[pi];
                if (pe.constructor === functionConstructor) {
                    key = pe(e);
                } else {
                    key = e[pe];
                }
                rinstance[key] = rinstance[key] || {};
                rinstance = rinstance[key];
            }
            pe = p[pi];
            if (pe.constructor === functionConstructor) {
                key = pe(e);
            } else {
                key = e[pe];
            }
            rinstance[key] = pe;
        }
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _keyBy);
