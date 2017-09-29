'use strict'

const outcome = require('./outcome.js')
let gameComplete = false

// who is the current player
// which square was clicked
// check if square has been played
// change the square value to the player symbol
// check for a win
// change the turn indicator to other player

const onPlayerMove = function (event) {
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
    $('#' + clickedSquare).mouseleave(function () {
      $('#' + clickedSquare).css('cursor', 'not-allowed')
    })
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
    console.log('playerWonGame is ', playerWonGame)
    if (playerWonGame === true) {
      gameComplete = true
      allSquaresNotAllowed()
    }
  }

  // change turn indicator
  const updatePlayerTurn = function (currentPlayer) {
    if (currentPlayer === '' || currentPlayer === 'o') {
      $('#turn-indicator').text('x')
    } else {
      $('#turn-indicator').text('o')
    }
  }

  const currentPlayer = currentPlayerIs()
  const clickedSquare = $(this).attr('id')
  console.log('clicked square is ', clickedSquare)
  if (isSquareOpen(clickedSquare) === true && gameComplete === false) {
    updateSquare(currentPlayer, clickedSquare)
    didPlayerWin(currentPlayer, clickedSquare)
    updatePlayerTurn(currentPlayer)
  }
}

module.exports = {
  onPlayerMove
}
