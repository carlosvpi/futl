const getDepthLeaves = require('./getDepthLeaves')
const filter = require('../list/filter')

module.exports = ({ getChildren }) => {
	getDepthLeavesFromTree = getDepthLeaves({ getChildren })
	return tree => filter(tree => getChildren(tree).length === 0)(getDepthLeavesFromTree(tree))
}