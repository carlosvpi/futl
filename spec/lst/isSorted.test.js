var isSorted = require('../../src/lst/isSorted');

function objOrd(a, b) {
	return a.value - b.value;
}

describe('isSorted', function() {
  it('says if an array of numbers is sorted', function() {
    expect(isSorted([1,2,3])).toBe(true);
    expect(isSorted([3,2,3])).toBe(false);
  });
  it('says if an array of objects is sorted', function() {
    expect(isSorted(objOrd, [{value:1},{value:2},{value:3}])).toBe(true);
    expect(isSorted(objOrd, [{value:3},{value:2},{value:3}])).toBe(false);
  });
})