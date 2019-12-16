var slice = require('../../src/lst/slice');

describe('Slice', function() {
    var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('slices an array to some index', function() {
        expect(slice(0, 7, 2, list)).toEqual([0, 2, 4, 6]);
    });

    it('slices an array until some index from the end', function() {
        expect(slice(0, -5, 1, list)).toEqual([0, 1, 2, 3, 4, 5]);
    });

    it('slices with start index bigger than end index', function() {
        expect(slice(9, 0, 1, list)).toEqual([9, 10]);
    });

    it('slices backwards', function() {
        expect(slice(9, 7, 1, list)).toEqual([9, 8]);
    });
})
