var getTree = require('../../src/graph/getTree');
var getDepthRun = require('../../src/tree/getDepthRun');
var toArray = require('../../src/list/toArray');

describe('getTree', function() {
  it('gets the tree of a graph', function() {
  	const graphInterface = {
  		areNodesEqual: () => root,
  		getNeighbors: () => children
  	}
	const tree = [1,[2,[3],[4]],[5,[6,[7]]],[8,[9],[10],[11]],[12]]
	const result = [1,2,5,8,12,3,4,6,9,10,11,7]

    expect(toArray(getTree(treeInterface)(tree))).toEqual(result);
  });
})
