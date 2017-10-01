'use strict'

const outcome = require('./outcome.js')
const gameapi = require('../game-api/api.js')
const gameapiui = require('../game-api/ui.js')

let gameComplete = false
let gameResult = null
let movesPlayed = 0

const onPlayerMove = function (event) {
  console.log('------------------- NEW CLICK DATA STARTS HERE -------------------')
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
    // also change mouseover behavior for played square *** not working correctly so commented out ***
    // $('#' + clickedSquare).mouseleave(function () {
    //   $('#' + clickedSquare).css('cursor', 'not-allowed')
    //   console.log('mouseleave happened')
    // })
  }

  // change cursor to 'not-allowed' for all squares
  const allSquaresNotAllowed = function () {
    for (let i = 0; i < 9; i++) {
      $('#' + i).css('cursor', 'not-allowed')
    }
  }

  // did player win?
  const didPlayerWin = function (currentPlayer, clickedSquare) {
    const playerWonGame = outcome.didPlayerWin(currentPlayer, clickedSquare)
    if (playerWonGame === true) {
      gameComplete = true
      gameResult = currentPlayer + 'win'
      allSquaresNotAllowed()
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
    movesPlayed++
  }

  const wasGameDrawn = function (movesPlayed) {
    if (movesPlayed === 9) {
      gameComplete = true
      gameResult = 'draw'
      allSquaresNotAllowed()
    }
  }

  const displayGameResult = function (gameResult) {
    console.log('were inside the displayGameResult function')
    $('#game-outcome-info > p').text(gameResult)
    // $('#player-turn-info').hide()
    // $('#game-outcome-info').show()
    // const x = document.getElementById('player-turn-info')
    // console.log('x is ', x)
    // x.style.display = 'none'
    // $('#game-outcome-info').style.display = 'block'
  }

  // *** MAIN GAME FLOW FOR EACH BOARD CLICK ***
  // check game is not already over
  if (gameComplete === false) {
    // who is the current player
    const currentPlayer = currentPlayerIs()
    // which square was clicked
    const clickedSquare = $(this).attr('id')
    console.log('player', currentPlayer, 'clicked square', clickedSquare)
    // check if square is open
    if (isSquareOpen(clickedSquare) === true) {
      // change the square value to the player symbol
      updateSquare(currentPlayer, clickedSquare)
      // check for a win (if true: updates gameComplete and gameResult)
      didPlayerWin(currentPlayer, clickedSquare)
      // update game data on server
      updateGame(currentPlayer, clickedSquare, gameComplete)
      // change the turn indicator to other player
      updatePlayerTurn(currentPlayer)
      // check for a draw
      wasGameDrawn(movesPlayed)
    }
  } else if (gameComplete === true) {
    // update display to show game result
    displayGameResult(gameResult)
  }
  console.log('movesPlayed is', movesPlayed)
  console.log('gameResult is', gameResult)
  console.log('gameComplete is', gameComplete)
}

const resetGameBoard = function () {
  for (let i = 0; i < 9; i++) {
    $('#' + i + ' > p').text(null)
    $('#' + i).css('cursor', 'pointer')
  }
  $('#turn-indicator').text('x')
  $('#game-outcome-info > p').text('')
  gameComplete = false
  gameResult = null
  movesPlayed = 0
}

module.exports = {
  onPlayerMove,
  resetGameBoard
}
