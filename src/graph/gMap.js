function gMap(buildGraph, setAdjIndexes, f, getNodes, getAdjIndexes, graph) {
	const nodes = getNodes(graph);
	const getAjdIndexesOfNode = getAdjIndexes(graph);
	const nodesLength = nodes.length;
	const newNodes = Array(nodesLength);
	var newAdjs;
	var node;

	for (var i = 0; i < nodesLength; i++) {
		node = f(nodes[i]);
		newNodes[i] = f(node);
		newAdjs = setAdjIndexes.call(newAdjs, node, getAjdIndexesOfNode(node))
	}

	return buildGraph(newNodes, newAdjs);
}

module.exports = require('../../util/curry6').bind(this, gMap);
