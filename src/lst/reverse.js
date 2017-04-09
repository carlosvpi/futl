module.exports = function reverse(lst) {
    for (var i = 0, le = lst.length, r = Array(le), j = le - 1; i < le; i++, j--) {
        r[i] = lst[j];
    }
    return r;
};
