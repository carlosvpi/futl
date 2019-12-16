module.exports = require('./curry')((f, d) => {
	f(d)
	return d
})
