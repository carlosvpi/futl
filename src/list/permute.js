// Returns an array [e_i] such that e_i = f(lst_i)

var arrayConstructor = require('../type').arrayConstructor;
var arrayToIter = require('./arrayToIter');

function *permute(perm, iter) {
    var permIter = perm.constructor === arrayConstructor ? arrayToIter(perm) : perm,
        e = iter.next(),
        p = permIter.next(),
        pv;
        cachedArray = [],
        i;
    while(!p.done) {
        pv = p.value;
        while (pv >= cachedArray.length && !e.done) {
            cachedArray.push(e.value)
            e = iter.next();
        }
        yield cachedArray[pv];
        p = permIter.next();
    }
}

module.exports = require('../curry2').bind(this, permute);
