'use strict'

const store = require('../store.js')

const newGameSuccess = function (data) {
  $('#message').text('New game created sussessfully')
  store.game = data.game
  console.log('store.game is ', store.game)
}

const newGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error starting new game')
}

const updateGameSuccess = function (data) {
  $('#message').text('Game updated sussessfully')
  store.game = data.game
  console.log('store.game is ', store.game)
}

const updateGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error starting new game')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure
}
