var getDepthRun = require('../../src/tree/getDepthRun')
var pipe = require('../../src/f/pipe')
var map = require('../../src/list/map')
var toArray = require('../../src/list/toArray')

describe('getDepthRun', function() {
  it('gets nodes by depth', function() {
  	const treeInterface = {
  		getChildren: ([_, ...children]) => children
  	}
	const getRoot = ([root]) => root
	const tree = [1,[2,[3],[4]],[5,[6,[7]]],[8,[9],[10],[11]],[12]]
	const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    expect(pipe(tree)
    	.to(getDepthRun(treeInterface))
    	.to(map(getRoot))
    	.to(toArray)
    	.value).toEqual(result)
  })
})
