const areEqual = (a) => (b) => a === b

function getPathsTree ({ getNeighbors, areNodesEqual = areEqual }) {
	const getPathsTreeFromRootNode = function getPathsTreeFromRootNode (rootNode) {
		return [rootNode]
	}
	getPathsTreeFromRootNode.getChildren = (path) => getNeighbors(path[path.length - 1])
		.filter(neighbor => !path.find(areNodesEqual(neighbor)))
		.map(neighbor => [...path, neighbor])
	getPathsTreeFromRootNode.getRoot = (path) => path

	return getPathsTreeFromRootNode
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
const iFilter = require('../lazy/iFilter')
const iMap = require('../lazy/iMap')
const iTap = require('../lazy/iTap')
const pipe = require('../f/pipe')
const getDepthLeaves = require('../tree/getDepthLeaves')

graph.areNodesEqual = ([a,b]) => ([c,d]) => a===c && b===d

module.exports = getPathsTree

const getPathsTreeFromRootNode = getPathsTree(graph)
const solution = pipe(getPathsTreeFromRootNode([0,0]))
	.to(getDepthLeaves(getPathsTreeFromRootNode))
	.to(iFilter(path => {
		const last = path[path.length - 1]
		return path.length === 11 && map[last[0]][last[1]] === 2
	}))
	.to(iMap(path => map.map((row,i) => row.map((col,j) => {
		if (map[i][j] >= 0) {
			const position = path.find(graph.areNodesEqual([i,j]))
			const index = path.indexOf(position)
			return index < 10 ? `${index}` : String.fromCharCode(55+index)
		}
		}).join('')).join('\n')
	)).value
	// .to(iTap(console.log)).value
iterToArray(solution).forEach(console.log)

// const getPathsTreeFromRootNode = getPathsTree({ getNeighbors: x => [x*3+1, x*2+2] })
// const getDepthLeaves (getPathsTreeFromRootNode.getRoot, getPathsTreeFromRootNode.getChildren)(getPathsTreeFromRootNode(1))
