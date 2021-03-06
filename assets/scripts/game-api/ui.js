'use strict'

const store = require('../store.js')

const newGameSuccess = function (data) {
  $('#message').text('New game started!')
  store.game = data.game
  $('#game-outcome-div').addClass('hidden')
  $('#session-score-div').removeClass('hidden')
  $('#player-turn-div').removeClass('hidden')
  $('#game-grid-div').removeClass('hidden')
}

const newGameFailure = function () {
  $('#message').text('Error starting new game')
}

const updateGameSuccess = function (data) {
  $('#message').text('Game updated successfully')
  store.game = data.game
}

const updateGameFailure = function () {
  $('#message').text('Error updating game data on server')
}

const playerGamesCompleteSuccess = function (data) {
  $('#message').text('Game data retrieved successfully')
  store.gamesComplete = data
}

const playerGamesCompleteFailure = function () {
  $('#message').text('Error retrieving game stats')
}

const playerGamesAllSuccess = function (data) {
  $('#message').text('Game data retrieved successfully')
  store.gamesAll = data
  const playerGamesPlayed = store.gamesAll.games.length
  const playerGamesCompleted = store.gamesComplete.games.length
  $('#playerStats > p').text('You have started ' + playerGamesPlayed + ' games, of which you completed ' + playerGamesCompleted + ' games.')
}

const playerGamesAllFailure = function () {
  $('#message').text('Error retrieving game stats')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  playerGamesCompleteSuccess,
  playerGamesCompleteFailure,
  playerGamesAllSuccess,
  playerGamesAllFailure
}
