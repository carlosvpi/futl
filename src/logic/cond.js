module.exports = require('../../util/curry4')(function cond(condition, positive, negative, datum) {
    return (condition(datum) ? positive : negative)(datum);
});
