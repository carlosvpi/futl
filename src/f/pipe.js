function Pipe(value) {
	this.value = value
}
Pipe.prototype.to = function to (f) {
	return new Pipe(f(this.value))
}

module.exports = function pipe (value) {
	return new Pipe(value)
}
