var getBreadthLeaves = require('../../src/tree/getBreadthLeaves');
var toArray = require('../../src/list/toArray');

describe('getBreadthLeaves', function() {
  it('gets leaves by breadth', function() {
  	const treeInterface = {
  		getRoot: ([root]) => root,
  		getChildren: ([_, ...children]) => children
  	}
	const tree = [1,[2,[3],[4]],[5,[6,[7]]],[8,[9],[10],[11]],[12]]
	const result = [12, 3, 4, 9, 10, 11, 7]

    expect(toArray(getBreadthLeaves(treeInterface)(tree))).toEqual(result);
  });
})
