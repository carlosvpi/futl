var isSorted = require('../../src/lst/isSorted');
var sort = require('../../src/lst/sort');
var reduce = require('../../src/lst/reduce');
var contains = require('../../src/lst/contains');

function objOrd(a, b) {
	return a.value - b.value;
}

describe('Sort', function() {
  it('sorts an array of numbers', function() {
    expect(sort([4,5,2,3])).toEqual([2,3,4,5]);
  });
  it('sorts an array of objects', function() {
  	var list = [{value:3},{value:2},{value:1}];
  	var sorted = sort(objOrd, list);
    expect(isSorted(objOrd, sorted)).toBe(true);
    expect(sorted.length).toBe(list.length);
    expect(reduce((acc, v) => {
    	return acc && contains(v, list);
    }, true, sorted)).toBe(true);
    expect(reduce((acc, v) => {
    	return acc && contains(v, sorted);
    }, true, list)).toBe(true);
  });
})