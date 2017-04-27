const curry2 = require('../../util/curry2');
const unitProto = {
    chain: function chain(f) {
        return f(this._value);
    },
    map: function map(f) {
        return Unit(f(this._value));
    },
    ap: function ap(v) {
        return v.map(this._value);
    },
    join: function join() {
        return this._value;
    }
};

function Unit(_value) {
    const monad = { _value };
    monad.__proto__ = unitProto;
    return monad;
};

Unit.chain = curry2.bind(this, (f, m) => unitProto.chain.call(m, f));
Unit.map = curry2.bind(this, (f, m) => unitProto.map.call(m, f));
Unit.ap = curry2.bind(this, (v, m) => unitProto.ap.call(m, v));
Unit.join = m => unitProto.join.call(m);
Unit.proto = unitProto;

module.exports = Unit;
