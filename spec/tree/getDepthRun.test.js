var getDepthRun = require('../../src/tree/getDepthRun');
var toArray = require('../../src/list/toArray');

describe('getDepthRun', function() {
  it('gets nodes by depth', function() {
  	const treeInterface = {
  		getRoot: ([root]) => root,
  		getChildren: ([_, ...children]) => children
  	}
	const tree = [1,[2,[3],[4]],[5,[6,[7]]],[8,[9],[10],[11]],[12]]
	const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    expect(toArray(getDepthRun(treeInterface)(tree))).toEqual(result);
  });
})
