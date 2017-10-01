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
  $('#message').text('Error updating game data on server')
}

const playerGamesCompleteSuccess = function (data) {
  $('#message').text('Game data retrieved sussessfully')
  store.gamesComplete = data
  const playerGamesCompleted = store.gamesComplete.games.length
  console.log('gamesComplete length is ', playerGamesCompleted)
}

const playerGamesCompleteFailure = function (error) {
  console.error(error)
  $('#message').text('Error retrieving game stats')
}

const playerGamesAllSuccess = function (data) {
  $('#message').text('Game data retrieved sussessfully')
  store.gamesAll = data
  const playerGamesPlayed = store.gamesAll.games.length
  const playerGamesCompleted = store.gamesComplete.games.length
  console.log('gamesAll length is ', playerGamesPlayed)
  // const statsText = 'You started ' + playerGamesPlayed + ' games, and completed ' + playerGamesCompleted + ' of them'
  // console.log('statsText is: ', statsText)
  $('#playerStats > p').text('You have played ' + playerGamesPlayed + ' games, of which you completed ' + playerGamesCompleted + ' games.')
}

const playerGamesAllFailure = function (error) {
  console.error(error)
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
