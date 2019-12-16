module.exports = function *range(start, end, step = star >= end ? 1 : -1) {
	for (let index = start; index <= end; index += step) {
		yield index
	}
}
