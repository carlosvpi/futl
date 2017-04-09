var arrayConstructor = require('../../util/type').arrayConstructor;

function _oGet(propList, obj) {
    var propListToUse = propList.constructor === arrayConstructor ? propList : [propList];

    for (var i = 0, le = propListToUse.length, r = obj; i < le; i++) {
        r = r[propListToUse[i]];
    }
    return r;
}

module.exports = require('../../util/curry2').bind(this, _oGet);
