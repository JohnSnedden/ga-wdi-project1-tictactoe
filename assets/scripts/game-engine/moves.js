'use strict'

const outcome = require('./outcome.js')
const gameapi = require('../game-api/api.js')
const gameapiui = require('../game-api/ui.js')

let gameComplete = false
let gameResult = null
let movesPlayed = 0

const onPlayerMove = function (event) {
  // clear message text
  $('#message').text('')
  // identify current player
  const currentPlayerIs = function () {
    const currentPlayerIndicator = $('#turn-indicator').text()
    return currentPlayerIndicator
  }

  // is square open?
  const isSquareOpen = function (clickedSquare) {
    if ($('#' + clickedSquare + ' > p').text() === '') {
      return true
    } else {
      return false
    }
  }

  // update board with user move
  const updateSquare = function (currentPlayer, clickedSquare) {
    $('#' + clickedSquare + ' > p').text(currentPlayer)
    movesPlayed++
  }

  // change cursor to 'not-allowed' for all squares
  const allSquaresNotAllowed = function () {
    for (let i = 0; i < 9; i++) {
      $('#' + i).css('cursor', 'not-allowed')
    }
  }

  // update the in-game session score
  const updateSessionScore = function (currentPlayer) {
    const previousScore = +$('#sessionScore' + currentPlayer.toUpperCase() + ' > p').text()
    const newScore = previousScore + 1
    $('#sessionScore' + currentPlayer.toUpperCase() + ' > p').text(newScore)
  }

  const displayGameResult = function (gameResult) {
    $('#game-outcome-info > p').text(gameResult)
    $('#player-turn-div').addClass('hidden')
    $('#game-outcome-div').removeClass('hidden')
  }

  // did player win?
  const didPlayerWin = function (currentPlayer, clickedSquare) {
    const playerWonGame = outcome.didPlayerWin(currentPlayer, clickedSquare)
    if (playerWonGame === true) {
      gameComplete = true
      gameResult = currentPlayer + 'win'
      allSquaresNotAllowed()
      updateSessionScore(currentPlayer)
      displayGameResult(gameResult)
      return true
    } else return false
  }

  const wasGameDrawn = function (movesPlayed) {
    if (movesPlayed === 9 && gameComplete === false) {
      gameComplete = true
      gameResult = 'draw'
      allSquaresNotAllowed()
      displayGameResult(gameResult)
    }
  }

  // update game data on server
  const updateGame = function (currentPlayer, clickedSquare, gameComplete) {
    const data = {
      'game': {
        'cell': {
          'index': clickedSquare,
          'value': currentPlayer
        },
        'over': gameComplete
      }
    }
    gameapi.updateGame(data)
      .then(gameapiui.updateGameSuccess)
      .catch(gameapiui.updateGameFailure)
  }

  // change turn indicator and update count of moves played
  const updatePlayerTurn = function (currentPlayer) {
    if (currentPlayer === '' || currentPlayer === 'o') {
      $('#turn-indicator').text('x')
    } else {
      $('#turn-indicator').text('o')
    }
  }

  // *** MAIN GAME FLOW FOR EACH BOARD CLICK ***
  // check game is not already over
  if (gameComplete === false) {
    // who is the current player
    const currentPlayer = currentPlayerIs()
    // which square was clicked
    const clickedSquare = $(this).attr('id')
    // check if square is open
    if (isSquareOpen(clickedSquare) === true) {
      // change the square value to the player symbol
      updateSquare(currentPlayer, clickedSquare)
      // check for a win (if true: updates gameComplete and gameResult)
      didPlayerWin(currentPlayer, clickedSquare)
      // check for a draw
      wasGameDrawn(movesPlayed)
      // update game data on server
      updateGame(currentPlayer, clickedSquare, gameComplete)
      if (gameComplete === false) {
        // change the turn indicator to other player
        updatePlayerTurn(currentPlayer)
      }
    }
  }
}

const resetGameBoard = function () {
  for (let i = 0; i < 9; i++) {
    $('#' + i + ' > p').text(null)
    $('#' + i).css('cursor', 'pointer')
  }
  $('#turn-indicator').text('x')
  $('#game-outcome-info > p').text('')
  $('#playerStats > p').text('')
  gameComplete = false
  gameResult = null
  movesPlayed = 0
}

module.exports = {
  onPlayerMove,
  resetGameBoard
}
