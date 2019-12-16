module.exports = function getAcc (f, init) {
	let value = init
	return {
		acc: (nextValue) => value = f(value, nextValue),
		get: () => value
	}
}
