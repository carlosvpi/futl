module.exports = function memoize(f) {
    const memo = {}

    return (...arguments) => {
    	let args
    	try {
	        args = JSON.stringify(arguments)
	    } catch (e) {
	    	throw new Error(`Unable to use ${arguments} as memoization key`)
	    }
        memo[args] = memo[args] || f(...arguments)
        return memo[args]
    };
};
