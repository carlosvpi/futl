var F = {};

var modules = [require('./f'),
    require('./array'),
    require('./lst'),
    require('./graph'),
    require('./tree'),
    require('./obj'),
    require('./logic'),
    require('./stream')];

for (var i = 0, le = modules.length, m; i < le; i++) {
    m = modules[i];
    for (var k in m) {
        F[k] = m[k];
    }
}

module.exports = F;
