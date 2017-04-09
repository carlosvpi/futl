function bind(f) {
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

module.exports = function Unit(value) {
    var monad = { _value: value };
    monad.__proto__ = unitProto;
    return monad;
};
