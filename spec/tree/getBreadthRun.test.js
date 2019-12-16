var getBreadthRun = require('../../src/tree/getBreadthRun')
var pipe = require('../../src/f/pipe')
var map = require('../../src/list/map')
var toArray = require('../../src/list/toArray')

describe('getBreadthRun', function() {
  it('gets nodes by depth', function() {
  	const treeInterface = {
  		getChildren: ([_, ...children]) => children
  	}
	const getRoot = ([root]) => root
	const tree = [1,[2,[3],[4]],[5,[6,[7]]],[8,[9],[10],[11]],[12]]
	const result = [1, 2, 5, 8, 12, 3, 4, 6, 9, 10, 11, 7]

    expect(pipe(tree)
    	.to(getBreadthRun(treeInterface))
    	.to(map(getRoot))
    	.to(toArray)
    	.value).toEqual(result)
  })
})
