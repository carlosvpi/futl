module.exports = function oCopy(obj) {
    for (var i = 0, keys = Object.keys(obj), le = keys.length, r = {}, key; i < le; i++) {
        key = keys[i];
        r[key] = obj[key];
    }
    return r;
};
