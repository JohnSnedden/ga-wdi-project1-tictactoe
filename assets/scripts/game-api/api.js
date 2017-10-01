'use strict'

const config = require('../config.js')
const store = require('../store.js')

const newGame = function () {
  console.log('in game-api > app.js > newGame > store.user is ', store.user)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  console.log('in game-api > app.js > updateGame > store.game is ', store.game)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  newGame,
  updateGame
}
