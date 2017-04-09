// Returns the sorted array. sort([f], lst), with f === <

var functionConstructor = require('../../util/type').functionConstructor,
    ord = require('../../util/ord');

function _sort(f, lst) {
    var lstLength = lst.length;

    if (lstLength === 0) {
        return [];
    }

    var stack = [lst],
        r = Array(lstLength),
        ri = lstLength - 1,
        m = [],
        M = [],
        lst0, lstj,
        g, gLength,
        j;

    while(stack.length) {
        g = stack.pop();
        gLength = g.length;
        lst0 = g[0];
        if (gLength === 0) {
            if (ri >= 0) {
                r[ri--] = stack.pop();
            }
        } else {
            m = [];
            M = [];
            for (j = 1; j < gLength; j++) {
                lstj = g[j];
                (f(lstj, lst0) < 0 ? m : M).push(lstj);
            }
            stack.push(m, lst0, M);
        }
    }

    return r;
}


module.exports = function sort(f, lst) {
    if (f.constructor === functionConstructor) {
        if (lst !== undefined) {
            return _sort(f, lst);
        } else {
            return _sort.bind(this, f);
        }
    } else {
        return _sort(ord, f);
    }
};
