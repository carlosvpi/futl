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

module.exports = getTree
