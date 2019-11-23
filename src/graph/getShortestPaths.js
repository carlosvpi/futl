module.exports = function getShortestPath (nodes, getNeighbors, src, dst) {
	let paths = [[src]]
	while (paths.length) {
		let shortestPath = paths.reduce((acc, path) => path.length < acc.length ? path : acc)
		let indexOfShortestPath = paths.indexOf(shortestPath)
		let node = shortestPath[shortestPath.length - 1]
		paths = paths.slice(0, indexOfShortestPath).concat(paths.slice(indexOfShortestPath + 1))
		let neighbors = getNeighbors(node)

		if (neighbors.includes(dst)) {
			return [...shortestPath, dst]
		}

		neighbors.forEach(neighbor => {
			if (!shortestPath.includes(neighbor)) {
				paths.push([...shortestPath, neighbor])
			}
		})
	}
	return []
}