const Model = require('./model')

function Player (id) {
	this.life = 100
	this.name = ''
	this.id = id

	const model = new Model()
	model.findOne(id, this.setName.bind(this))
}

Player.prototype.getName = function () {
	return this.name
}

Player.prototype.setName = function (err, name) {
	if (!(name instanceof Error)) {
		this.name = name
	} else {
		console.error('Error on creating player', err)
	}
}

Player.prototype.attack = function () {
	return Math.floor(Math.random() * 10)
}

module.exports = Player
