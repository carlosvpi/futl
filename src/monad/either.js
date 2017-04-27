const curry2 = require('../../util/curry2');
const eitherProto = {
    chain: function chain(f) {
        return this.isLeft() ? this : f(this._value);
    },
    map: function map(f) {
        return this.isLeft() ? this : Either(this._isLeft, f(this._value));
    },
    ap: function ap(v) {
        return this.isLeft() ? this : v.map(this._value);
    },
    join: function join() {
        return this._value;
    },
    getOrElse: function getOrElse(d) {
        return this.isLeft() ? d : this._value;
    },
    isLeft: function isLeft() {
        return this._isLeft;
    },
    isRight: function isRight() {
        return !this._isLeft;
    }
};

function Either(_isLeft, _value) {
    const monad = { _value, _isLeft };
    monad.__proto__ = eitherProto;
    return monad;
};

Either.chain = curry2.bind(this, (f, m) => eitherProto.chain.call(m, f))
Either.map = curry2.bind(this, (f, m) => eitherProto.map.call(m, f))
Either.ap = curry2.bind(this, (v, m) => eitherProto.ap.call(m, v))
Either.join = m => eitherProto.join.call(m)
Either.getOrElse = curry2.bind(this, (d, m) => eitherProto.getOrElse.call(m, d))
Either.isLeft = m => eitherProto.isLeft.call(m)
Either.isRight = m => eitherProto.isRight.call(m)
Either.proto = eitherProto;

module.exports = Either;
