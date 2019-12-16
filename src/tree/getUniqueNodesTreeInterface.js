const areNodesEqual = (a) => (b) => a === b

module.exports = function getUniqueNodesTreeInterface ({ getChildren, areNodesEqual, ...treeInterface }) {
	return function (rejectedChildren = []) {
		const visited = rejectedChildren
		return {
			getChilren: (tree) => {
				const children = getChildren(tree).filter(child => !visited.find(areNodesEqual(child)))
				visited.push(...children)
				return children
			},
			areNodesEqual,
			...treeInterface
		}
	}
}