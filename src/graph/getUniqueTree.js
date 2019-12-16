const areEqual = (a) => (b) => a === b

function getUniqueTree ({ getNeighbors, areNodesEqual = areEqual }) {
	const getUniqueTreeFromRootNode = function getUniqueTreeFromRootNode (node) {
		const visited = [node]
		return {
			getChildren: (root) => {
				const neighbors = getNeighbors(root)
					.filter(neighbor => !visited.find(areNodesEqual(neighbor)))
				neighbors.forEach(neighbor => visited.push(neighbor))
				return neighbors
			},
			getRoot: (root) => root,
			root: node
		}
	}
}

module.exports = getUniqueTree
