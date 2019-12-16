var getTree = require('../../src/graph/getTree');
var getDepthRun = require('../../src/tree/getDepthRun');
var toArray = require('../../src/list/toArray');

describe('getTree', function() {
  it('gets the tree of a graph', function() {
	let map = [
		[1,0,0,0],
		[0,0,0,0],
		[0,0,2,-1]
	]

	const graph = {
		getNeighbors: ([i,j]) => {
			const neighbors = []
			if (i > 0 && map[i-1][j] >= 0) {
				neighbors.push([i-1,j])
			}
			if (i < map.length - 1 && j < map[i+1].length && map[i+1][j] >= 0) {
				neighbors.push([i+1,j])
			}
			if (j > 0 && map[i][j-1] >= 0) {
				neighbors.push([i,j-1])
			}
			if (j < map[i].length - 1 && map[i][j+1] >= 0) {
				neighbors.push([i,j+1])
			}
			return neighbors
		},
		areNodesEqual: ([a,b]) => ([c,d]) => a===c && b===d
	}

	const toArray = require('../../src/list/toArray')
	const getDepthRun = require('../../src/tree/getDepthRun')
	const pipe = require('../../src/f/pipe')
	const treeInterface = getTree(graph)
	const result = [[0,0],[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[1,3],[0,3],[0,3],[1,3],[1,2],[2,2],[1,2],[0,2],[0,1],[0,3],[1,3],[2,2],[1,3],[0,3],[0,2],[0,1],[2,2],[1,2],[0,2],[0,1],[1,1],[0,3],[1,3],[1,1],[0,1],[0,2],[0,3],[1,3],[1,3],[0,3],[0,2],[0,1],[1,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[2,0],[1,3],[0,3],[0,3],[1,3],[1,2],[2,2],[2,1],[2,0],[2,1],[2,0],[2,2],[1,2],[0,2],[0,1],[0,3],[1,3],[1,3],[0,3],[0,2],[0,1],[1,2],[0,2],[0,1],[0,3],[1,3],[2,2],[2,1],[2,0],[1,3],[0,3],[0,2],[0,1],[0,1],[1,1],[2,1],[2,0],[1,0],[2,2],[1,2],[0,2],[0,3],[1,3],[1,3],[0,3],[0,2],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,3],[1,3],[1,3],[0,3],[0,2],[1,2],[0,2],[0,3],[1,3],[2,2],[2,1],[2,0],[1,0],[1,3],[0,3],[0,2],[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,0],[1,0],[1,1],[1,1],[2,1],[2,0],[1,0],[2,2],[1,0],[2,0],[2,1],[2,2],[1,3],[0,3],[0,3],[1,3],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,0],[1,0],[1,1],[1,1],[2,1],[2,0],[1,0],[2,2],[1,0],[2,0],[2,1],[2,2]]

    expect(pipe([0,0])
		.to(treeInterface)
		.to(getDepthRun(treeInterface))
		.to(toArray)
		.value).toEqual(result);
  });
})
