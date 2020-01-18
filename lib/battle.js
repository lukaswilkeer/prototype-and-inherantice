function Battle (player1, player2) {
	this.rounds = 0
	this.roundsLimit = 10
	this.player1 = player1 
	this.player2 = player2
}

Battle.prototype.battle = function () {
	while (this.rounds < this.roundsLimit) {
		const p1Attack = this.player1.attack()
		const p2Attack = this.player2.attack()

		this.player1['life'] = this.player1['life'] - p2Attack
		this.player2['life'] = this.player2['life'] - p1Attack

		this.rounds = this.rounds + 1
	}

	this.result()
}

Battle.prototype.result = function () {
	if (this.player1['life'] < this.player2['life']) {
		console.log(`${this.player1.getName()} wins. ${this.player1.life} remains.`)
	}

	if (this.player2['life'] < this.player1['life']) {
		console.log(`${this.player2.getName()} winst. ${this.player2.life} ramains.`)
	}

	if (this.player1['life'] == this.player2['life']) {
		console.log('Drawn: \n')
		console.log(`each with ${this.player1.life} raiming.`)
	}
}

module.exports = Battle
