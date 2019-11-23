var getBreadthRun = require('../../src/tree/getBreadthRun');
var toArray = require('../../src/list/toArray');

describe('getBreadthRun', function() {
  it('gets nodes by breadth', function() {
  	const treeInterface = {
  		getRoot: ([root]) => root,
  		getChildren: ([_, ...children]) => children
  	}
	const tree = [1,[2,[3],[4]],[5,[6,[7]]],[8,[9],[10],[11]],[12]]
	const result = [1,2,5,8,12,3,4,6,9,10,11,7]

    expect(toArray(getBreadthRun(treeInterface)(tree))).toEqual(result);
  });
})
