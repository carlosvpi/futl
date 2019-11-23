const getDepthRun = function getDepthRun ({ getRoot, getChildren }) {
	return function* getDepthRunFromTree (tree) {
		const children = getChildren(tree)

		yield getRoot(tree)

		for (let i = 0; i < children.length; i++) {
			yield* getDepthRunFromTree(children[i])
		}
	}
}

getDepthRun.getRoot = ([root]) => root
getDepthRun.getChildren = ([_, ...children]) => children

module.exports = getDepthRun
