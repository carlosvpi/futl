function bind(f) {
    if (this.isNone()) return this;
    return f(this._value);
}

var unitProto = {
    bind: bind,
    flatMap: bind,
    chain: bind,
    map: function map(f) {
        return unit(f(this.__value));
    },
    ap: function ap(v) {
        return v.map(this.__value);
    }
};

var Maybe,
    maybeProto = {
        bind: bind,
        chain: bind,
        flatMap: bind,
        isNone: function isNone() {
            return this._value === undefined || this._value === null;
        },
        map: function fmap(f) {
            if (this.isNone()) return this;
            return Maybe(f(this._value));
        },
        join: function join() {
            return this._value;
        },
        ap: function ap(m) {
            return m.fmap(this._value);
        }
    };

Maybe = function(value) {
    var maybe = { _value: value };
    maybe.__proto__ = maybeProto;
    return maybe;
};

module.exports = {
    Maybe: Maybe,
    None: Maybe(undefined)
};
