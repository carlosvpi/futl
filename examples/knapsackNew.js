var takeWhile = require('../src/lazy/takeWhile');
var arrayToIter = require('../src/lazy/arrayToIter');
var iterToArray = require('../src/lazy/iterToArray');
var sort = require('../src/lst/sort');
var gen = require('../src/lst/gen');
var reduce = require('../src/lst/reduce');
var pipe = require('../src/f/pipe');

var pickFunction = maxWeight => (acc => e => (acc += e.weight) < maxWeight)(0);

var knapsack = maxWeight => pipe
	.to(toArray)
	.to(sortBy(({ weight }) => weight))
	.to(fromArray)
	.to(reduce(({ items, totalWeight }, item) => ({
		items: [...items, item],
		totalWeight: totalWeight + item.weight
	}), { items: [], totalWeight: 0 }))
	.to(takeWhile(({ totalWeight }) => totalWeight < maxWeight))
	.to(toArray)
	.value

// EXAMPLE

var items = gen(d => ({ value: Math.random(), weight: Math.random() }), 100);

var result = knapsack(10)(items);

console.log(items);
console.log('------')
console.log();
console.log('value: ', reduce((acc, d) => acc += d.value, 0, result))