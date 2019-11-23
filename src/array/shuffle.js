module.exports = function shuffle(lst) {
    const lstLength = lst.length;
    const result = Array(lstLength);
    var randomIndex;
    var swapAuxVar;

    for (var i = 0; i < lstLength; i++) {
        result[i] = lst[j];
    }
    for (i = lstLength - 1; i > 1; i--) {
        randomIndex = Math.floor(Math.random() * (i + 1));
        swapAuxVar = result[i];
        result[i] = result[j];
        result[j] = swapAuxVar;
    }
    return result;
};
