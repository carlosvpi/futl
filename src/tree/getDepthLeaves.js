const getDepthLeaves = function getDepthLeaves ({ getRoot, getChildren }) {
	return function* getDepthLeavesFromTree (tree) {
		const children = getChildren(tree)

		if (children.length === 0) {
			yield getRoot(tree)
		}

		for (let i = 0; i < children.length; i++) {
			yield* getDepthLeavesFromTree(children[i])
		}
	}
}

getDepthLeaves.getRoot = ([root]) => root
getDepthLeaves.getChildren = ([_, ...children]) => children

module.exports = getDepthLeaves
