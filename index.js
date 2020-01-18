const Player = require('./lib/player')
const Battle = require('./lib/battle')

function Match (player1, player2) {
	Battle.call(this, player1, player2)
}

/* eslint-disable semi ["error", "never"] */
Match.prototype = Object.create(Battle.prototype);

(() => {
	const player1 = new Player(1)
	const player2 = new Player(2)
	const battle = new Match(player1, player2)
	battle.battle()
})()
