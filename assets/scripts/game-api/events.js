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

const addHandlers = function () {
  $('#new-game').on('submit', onNewGame)
}

module.exports = {
  addHandlers
}
