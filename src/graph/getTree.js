const areEqual = (a) => (b) => a === b

function getTree ({ getNeighbors, areNodesEqual = areEqual }) {
	const getTreeFromRootNode = function getTreeFromRootNode (rootNode) {
		return {
			root: rootNode,
			visited: [rootNode]
		}
	}
	getTreeFromRootNode.getChildren = ({ root, visited }) => getNeighbors(root)
		.filter(neighbor => !visited.find(areNodesEqual(neighbor)))
		.map(neighbor => ({ root: neighbor, visited: [...visited, neighbor]}))
	getTreeFromRootNode.getRoot = ({ root }) => root

	return getTreeFromRootNode
}

var map = [
	[1,0,0,0],
	[0,0,0,0],
	[0,0,2,-1]
]

graph = {}
graph.getNeighbors = ([i,j]) => {
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
}

const iterToArray = require('../list/toArray')
const getDepthRun = require('../tree/getDepthRun')

graph.areNodesEqual = ([a,b]) => ([c,d]) => a===c && b===d

module.exports = getTree

const getTreeFromRootNode = getTree(graph)
console.log(iterToArray(getDepthRun(getTreeFromRootNode)(getTreeFromRootNode([0,0]))))

// const getTreeFromRootNode = getTree({ getNeighbors: x => [x*3+1, x*2+2] })
// const getDepthRun (getTreeFromRootNode.getRoot, getTreeFromRootNode.getChildren)(getTreeFromRootNode(1))
