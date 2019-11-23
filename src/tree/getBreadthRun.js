const getBreadthRun = function getBreadthRun ({ getRoot, getChildren }) {
	return function* (tree) {
		let stack = [tree]
		let current
		while (stack.length) {
			current = stack[0]
			stack = stack.slice(1)
			yield getRoot(current)
			stack.push(...getChildren(current))
		}
	}
}

getBreadthRun.getRoot = ([root]) => root
getBreadthRun.getChildren = ([_, ...children]) => children

module.exports = getBreadthRun
