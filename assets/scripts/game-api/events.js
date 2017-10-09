'use strict'

const api = require('./api')
const ui = require('./ui')
const moves = require('../game-engine/moves.js')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  moves.resetGameBoard()
}

const onPlayerStats = function (event) {
  event.preventDefault()
  api.playerGamesComplete()
    .then(ui.playerGamesCompleteSuccess)
    .catch(ui.playerGamesCompleteFailure)
  api.playerGamesAll()
    .then(ui.playerGamesAllSuccess)
    .catch(ui.playerGamesAllFailure)
    .then()
}

const addHandlers = function () {
  $('#new-game').on('submit', onNewGame)
  $('#nav-user-dropdown-game-stats').click(onPlayerStats)
}

module.exports = {
  addHandlers
}
