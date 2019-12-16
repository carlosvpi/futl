const find = require('../../src/list/find')

describe('List | find', function() {
    it('finds the first even number', function() {
        const iter = function* iter () {
            yield 1
            yield 3
            yield 5
            yield 6
            yield 7
        }
        const isEven = v => v % 2 === 0
        expect(find(isEven, iter())).toEqual(6)
    });
})
