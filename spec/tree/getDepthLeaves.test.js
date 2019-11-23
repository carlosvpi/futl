var getDepthLeaves = require('../../src/tree/getDepthLeaves');
var toArray = require('../../src/list/toArray');

describe('getDepthLeaves', function() {
  it('gets leaves by depth', function() {
  	const treeInterface = {
  		getRoot: ([root]) => root,
  		getChildren: ([_, ...children]) => children
  	}
	const tree = [1,[2,[3],[4]],[5,[6,[7]]],[8,[9],[10],[11]],[12]]
	const result = [3, 4, 7, 9, 10, 11, 12]

    expect(toArray(getDepthLeaves(treeInterface)(tree))).toEqual(result);
  });
})
