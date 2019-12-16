const prune = function prune (predicate) {
	return function pruneTree ({ getChildren, ...treeInterface }) {
		return {
			getChildren: (tree) => getChildren(tree).filter((child, i) => {
				return !predicate(child, i, tree)
			}),
			...treeInterface
		}
	}
}

module.exports = prune
