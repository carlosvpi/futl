const curry2 = require('../../util/curry2');
const maybeProto = {
    chain: function chain(f) {
        return this.isNone() ? this : f(this._value);
    },
    map: function map(f) {
        return this.isNone() ? this : Maybe(f(this._value));
    },
    ap: function ap(v) {
        return this.isNone() ? this : v.map(this._value);
    },
    join: function join() {
        return this._value;
    },
    getOrElse: function getOrElse(d) {
        return this.isNone() ? d : this._value;
    },
    isNone: function isNone() {
        return this._value === undefined || this._value === null;
    }
};

function Maybe(_value) {
    const monad = { _value };
    monad.__proto__ = maybeProto;
    return monad;
};

Maybe.chain = curry2.bind(this, (f, m) => maybeProto.chain.call(m, f))
Maybe.map = curry2.bind(this, (f, m) => maybeProto.map.call(m, f))
Maybe.ap = curry2.bind(this, (v, m) => maybeProto.ap.call(m, v))
Maybe.join = m => maybeProto.join.call(m)
Maybe.getOrElse = curry2.bind(this, (d, m) => maybeProto.getOrElse.call(m, d))
Maybe.isNone = m => maybeProto.isNone.call(m)
Maybe.proto = maybeProto;

module.exports = Maybe;
