var functionConstructor = require('../../util/type').functionConstructor;

function _oMap(pmap, obj) {
    var r = {},
        keys = Object.keys(pmap),
        p,
        v;

    for (var i = 0, keysLenght = keys.length; i < keysLenght; i++) {
        p = keys[i];
        v = pmap[p];
        if (v.constructor === functionConstructor) {
            r[p] = v(obj[p]);
        } else if (v) {
            r[p] = obj[p];
        }
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _oMap);
