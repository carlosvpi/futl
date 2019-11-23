const prune = function prune (p) {
	return function pruneTree ({ getRoot, getChildren }) {
		return {
			getRoot,
			getChildren: (tree) => getChildren(tree).filter((child, i) => {
				return !p(getRoot(child), child, i, tree)
			})
		}
	}
}

module.exports = prune
