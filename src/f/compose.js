module.exports = function compose(...functions) {
	return (...values) => {
		let value = functions[functions.length - 1](...values)
		for (let i = functions.length - 2; i >= 0; i--) {
			value = functions[i](value)
		}
		return value
	}
}
