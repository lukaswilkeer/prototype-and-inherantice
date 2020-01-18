const faker = require('faker')

function Model () {}

Model.prototype.findOne = function (id, callback) {
	return callback(null, faker.name.findName())
}

module.exports = Model
