module.exports = function *fromArray(array) {
    for(var i = 0, le = array.length; i < le; i++) {
        yield array[i];
    }
};
