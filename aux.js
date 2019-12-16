function Pipe(value) {
	this.value = value
}
Pipe.prototype.to = function to (f) {
	return new Pipe(f(this.value))
}

function pipe (value) {
	return new Pipe(value)
}
const areEqual = (a) => (b) => a === b

function getTree ({ getNeighbors, areNodesEqual = areEqual }) {
    const getTreeFromRootNode = function getTreeFromRootNode (rootNode) {
        return {
            root: rootNode,
            visited: [rootNode]
        }
    }
    getTreeFromRootNode.getChildren = ({ root, visited }) => getNeighbors(root)
        .filter(neighbor => !visited.find(areNodesEqual(neighbor)))
        .map(neighbor => ({ root: neighbor, visited: [...visited, neighbor]}))
    getTreeFromRootNode.getRoot = ({ root }) => root

    return getTreeFromRootNode
}

function getUniqueNodesTreeInterface ({ getChildren, areNodesEqual = areEqual, ...interface }) {
    return function (rejectedChildren = []) {
        const visited = rejectedChildren
        return {
            getChildren: (tree) => {
                const children = getChildren(tree).filter(child => !visited.find(areNodesEqual(child)))
                visited.push(...children)
                return children
            },
            areNodesEqual,
            ...interface
        }
    }
}

const getBreadthLeaves = function getBreadthLeaves ({ getRoot, getChildren }) {
    return function* (tree) {
        let stack = [tree]
        let current
        let children
        while (stack.length) {
            current = stack[0]
            stack = stack.slice(1)
            children = getChildren(current)
            if (children.length === 0) {
                yield getRoot(current)
            }
            stack.push(...children)
        }
    }
}

getBreadthLeaves.getRoot = ([root]) => root
getBreadthLeaves.getChildren = ([_, ...children]) => children

function toArray(iter) {
    var e = iter.next(),
        r = [];
    while(!e.done) {
        r.push(e.value);
        e = iter.next();
    }
    return r;
};

const min = (f) => (iter) => {
    var e = iter.next(),
        ev = e.value,
        r = ev;
    while(!e.done) {
        if (f(ev, r)) {
            r = ev;
        }
        e = iter.next();
        ev = e.value;
    }
    return r;
}

function toArray(iter) {
    var e = iter.next(),
        r = [];
    while(!e.done) {
        r.push(e.value);
        e = iter.next();
    }
    return r;
};
const filter = p => function *(iter) {
    var e = iter.next(),
        ev = e.value;
    while(!e.done) {
        if (p(ev)) {
            yield ev;
        }
        e = iter.next();
        ev = e.value;
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const prettify = index => nums.slice(0, index).join(',') + ',(' + nums[index] + '),' + nums.slice(index + 1).join(',')
    const graph = {
        getNeighbors: (path) => {
            const index = path[path.length - 1]
            const neighbors = []
            for (let i = 1; i <= nums[index] && index + i < nums.length; i++) {
                neighbors.push(index + i)
            }
            return neighbors
        }
    }
    const treeInterface = getTree(graph)
    const uniqueNodesTreeInterface = getUniqueNodesTreeInterface({ areNodesEqual: areEqual, ...treeInterface })()

    return pipe(nums)
        .to(treeInterface)
        .to(getBreadthLeaves(uniqueNodesTreeInterface))
        .to(filter(p => {
            return p[p.length - 1] === nums.length - 1
        }))
        .to(toArray)
        .to(console.log)
        // .to(min((p, q) => p.length < q.length))
        // .to(p => p.length - 1)
        .value
};

// console.log(jump([2,3,0,1,4]))
console.log(jump([4,8,4,4,9,6,9,5,5,7,1,6,7,2,1,8]))

