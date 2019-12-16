module.exports = function toArray(iter) {
	const array = []
	for (let item of iter) {
		array.push(item)
	}
    return array
}
