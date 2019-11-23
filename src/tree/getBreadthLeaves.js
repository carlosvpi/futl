const getBreadthLeaves = function getBreadthLeaves ({ getRoot, getChildren }) {
	return function* (tree) {
		let stack = [tree]
		let current
		let children
		while (stack.length) {
			current = stack[0]
			stack = stack.slice(1)
			children = getChildren(current)
			if (children.length === 0) {
				yield getRoot(current)
			}
			stack.push(...children)
		}
	}
}

getBreadthLeaves.getRoot = ([root]) => root
getBreadthLeaves.getChildren = ([_, ...children]) => children

module.exports = getBreadthLeaves
