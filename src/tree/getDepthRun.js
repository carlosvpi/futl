const getDepthRun = function getDepthRun ({ getChildren }) {
	return function* getDepthRunFromTree (tree) {
		const children = getChildren(tree)

		yield tree

		for (let i = 0; i < children.length; i++) {
			yield* getDepthRunFromTree(children[i])
		}
	}
}

getDepthRun.getChildren = ([_, ...children]) => children

module.exports = getDepthRun
