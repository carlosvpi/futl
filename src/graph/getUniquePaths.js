const areEqual = (a) => (b) => a === b


function getUniquePaths ({ getNeighbors, areNodesEqual = areEqual }) {
    return function getUniquePathsFromRootNode (node) {
        const visited = [node]
        return {
            getChildren: (path) => {
                const neighbors = getNeighbors(path)
                    .filter(neighbor => !visited.find(areNodesEqual(neighbor)))
                	.map(neighbor => [...path, neighbor])
                neighbors.forEach(neighbor => visited.push(neighbor))
                return neighbors
            },
            getRoot: (path) => path,
            root: [node]
        }
    }
}

module.exports = getUniquePaths
