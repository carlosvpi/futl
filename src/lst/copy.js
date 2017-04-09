// Copy an array

module.exports = function copy(lst) {
    for (var i = 0, le = lst.length, r = Array(le); i < le; i++) {
        r[i] = lst[i];
    }
    return r;
};
