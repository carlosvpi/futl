const getBreadthRun = require('./getBreadthRun')
const filter = require('../list/filter')

module.exports = ({ getChildren }) => {
	getBreadthRunFromTree = getBreadthRun({ getChildren })
	return tree => filter(tree => getChildren(tree).length === 0)(getBreadthRunFromTree(tree))
}