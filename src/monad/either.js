var Either,
    rightProto = {
        bind: function bind(f)      { return f(this._right); },
        isLeft: function isLeft()   { return false; },
        isRight: function isLeft()  { return true; },
        fmap: function fmap(f)      { return Either(this._left, f(this._right)); },
        ap: function ap(m)          { return m.fmap(this._right); }
    },
    leftProto = {
        bind: function bind()       { return this; },
        isLeft: function isLeft()   { return true; },
        isRight: function isLeft()  { return false; },
        fmap: function fmap(f)      { return Either(this._left, f(this._right)); }
    };

Either = function(left, right) {
    var either = {
        _left: left,
        _right: right
    };
    either.__proto__ = (right === undefined || right === null) ? leftProto : rightProto;
    return either;
};

module.exports = {
    Either: Either,
    Left: Either(undefined)
};
