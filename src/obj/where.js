var types = require('../../util/type');
var functionConstructor = types.functionConstructor;
var objectConstructor = types.objectConstructor;

function _where(pf, obj) {
    if (obj.constructor === objectConstructor) {
        for (var keys = Object.keys(pf), i = 0, le = keys.length, k, pfk; i < le; i++) {
            k = keys[i];
            pfk = pf[k];
            if (pfk.constructor === functionConstructor) {
                if (!pfk(obj[k])) return false;
            } else {
                if (obj[k] !== pfk) return false;
            }
        }
    } else {
        if (pf.constructor === functionConstructor) {
            if (!pf(obj)) return false;
        } else {
            if (obj !== pf) return false;
        }
    }
    return true;
}

module.exports = require('../../util/curry2').bind(this, _where);
