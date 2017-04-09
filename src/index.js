var F = {};

var modules = [require('./f'),
    require('./lst'),
    require('./math'),
    require('./obj'),
    require('./cl'),
    require('./logic'),
    require('./monad'),
    require('./type')];

for (var i = 0, le = modules.length, m; i < le; i++) {
    m = modules[i];
    for (var k in m) {
        F[k] = m[k];
    }
}

module.exports = F;
