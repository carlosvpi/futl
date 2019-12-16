function Stream (value) {
	this.value = value
	this.subscriptions = []
	this.onDoneSubscriptions = []
	this.isDone = false
}

Stream.prototype.subscribe = function subscribe (f) {
	if (!this.isDone && !this.subscriptions.includes(f)) {
		this.subscriptions.push(f)
	}
	return this
}

Stream.prototype.onDone = function onDone (f) {
	if (!this.isDone && !this.onDoneSubscriptions.includes(f)) {
		this.onDoneSubscriptions.push(f)
	}
	return this
}

Stream.prototype.unsubscribe = function unsubscribe (f) {
	if (!this.isDone && this.subscriptions.includes(f)) {
		this.subscriptions = this.subscriptions.filter(subscription => subscription !== f)
	}
	return this
}

Stream.prototype.unOnDone = function unOnDone (f) {
	if (!this.isDone && this.onDoneSubscriptions.includes(f)) {
		this.onDoneSubscriptions = this.onDoneSubscriptions.filter(onDone => onDone !== f)
	}
	return this
}

Stream.prototype.update = function update (value) {
	if (!this.isDone) {
		for (let index = 0; index < this.subscriptions.length; index++) {
			this.subscriptions[index](value, this.value, this)
		}
		this.value = value
	}
	return this
}

Stream.prototype.done = function done () {
	if (!this.isDone) {
		this.isDone = true
		for (let index = 0; index < this.onDoneSubscriptions.length; index++) {
			this.onDoneSubscriptions[index](this.value, this)
		}
		this.subscriptions = null
		this.onDoneSubscriptions = null
	}
	return this
}

module.exports = Stream
