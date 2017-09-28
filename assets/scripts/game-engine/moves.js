'use strict'

const outcome = require('./outcome.js')

// who is the current player
// which square was clicked
// check if square has been played
// change the square value to the player symbol
// *** check for a win ***
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
  if (isSquareOpen(clickedSquare) === true) {
    updateSquare(currentPlayer, clickedSquare)

    // did player win game
    const playerWonGame = outcome.winningMove(currentPlayer, clickedSquare)
    console.log('playerWonGame is ', playerWonGame)

    updatePlayerTurn(currentPlayer)
  }
}

module.exports = {
  onPlayerMove
}
