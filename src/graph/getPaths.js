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

module.exports = getPathsTree
