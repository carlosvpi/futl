const getBreadthRun = function getBreadthRun ({ getChildren }) {
	return function* (tree) {
		let stack = [tree]
		let current
		while (stack.length) {
			current = stack[0]
			stack = stack.slice(1)
			yield current
			stack.push(...getChildren(current))
		}
	}
}

getBreadthRun.getChildren = ([_, ...children]) => children

module.exports = getBreadthRun
