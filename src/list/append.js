// iAppend(a, b) == [...b, ...a]

var arrayConstructor = require('../type').arrayConstructor;

function *append(la, lb) {
    var i, le, e;
    if (lb.constructor === arrayConstructor) {
        for(i = 0, le = lb.length; i < le; i++) {
            yield lb[i];
        }
    } else {
        e = lb.next();
        while(!e.done) {
            yield e.value;
            e = lb.next();
        }
    }
    if (la.constructor === arrayConstructor) {
        for(i = 0, le = la.length; i < le; i++) {
            yield la[i];
        }
    } else {
        e = la.next();
        while(!e.done) {
            yield e.value;
            e = la.next();
        }
    }
}

module.exports = require('../curry2').bind(this, append);
