var iGetUntil = require('../src/lazy/iGetUntil');
var arrayToIter = require('../src/lazy/arrayToIter');
var iterToArray = require('../src/lazy/iterToArray');
var sort = require('../src/lst/sort');
var gen = require('../src/lst/gen');
var reduce = require('../src/lst/reduce');
var compose = require('../src/f/compose');

var pickFunction = maxWeight => (acc => e => (acc += e.weight) < maxWeight)(0);

var knapsack = maxWeight => compose(
	iterToArray,
	iGetUntil(pickFunction(maxWeight)),
	arrayToIter,
	sort);

// EXAMPLE

var items = gen(d => ({ value: Math.random(), weight: Math.random() }), 100);

var result = knapsack(10)(items);

console.log(items);
console.log('------')
console.log();
console.log('value: ', reduce((acc, d) => acc += d.value, 0, result))