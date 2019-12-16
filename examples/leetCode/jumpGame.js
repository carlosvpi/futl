// https://leetcode.com/problems/jump-game-ii/

const getPaths = require('../../src/graph/getPaths')
const pipe = require('../../src/f/pipe')
const getDepthLeaves = require('../../src/tree/getDepthLeaves')
const toArray = require('../../src/list/toArray')
const min = require('../../src/list/min')

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const graph = {
        getNeighbors: (index) => {
            const neighbors = []
            for (let i = 1; i <= nums[index] && index + i < nums.length; i++) {
                neighbors.push(index + i)
            }
            return neighbors
        }
    }
    const pathsTreeInterface = getPaths(graph)

    return pipe(0)
        .to(pathsTreeInterface)
        .to(getDepthLeaves(pathsTreeInterface))
        .to(min((p, q) => p.length < q.length))
        .to(p => p.length - 1)
        .value
};

jump([2,3,1,1,4])