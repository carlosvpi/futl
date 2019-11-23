var prune = require('../../src/tree/prune');
var getDepthRun = require('../../src/tree/getDepthRun');
var toArray = require('../../src/list/toArray');
var pipe = require('../../src/f/pipe');

describe('prune', function() {
  it('prunes branches from odd nodes', function() {
  	const treeInterface = {
  		getRoot: ([root]) => root,
  		getChildren: ([_, ...children]) => children
  	}
	const tree = [1,[2,[3,[4],[5]],[6,[7,[8],[9],[10]]],[11,[12],[13]]],[14,[15,[16]],[17,[18],[19]],[20]],[21,[22,[23],[24],[25,[26,[27]],[28]]],[29,[30]]]]
	const result = [1,2,6,14,20]

    expect(pipe(tree)
    	.to(getDepthRun(prune(x => x % 2 !== 0)(treeInterface)))
    	.to(toArray)
    	.value
	).toEqual(result);
  });
})
