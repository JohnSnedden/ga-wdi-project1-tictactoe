'use strict'

// who is the current player
// which square was clicked
// check if square has been played
// change the square value to the player symbol
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
    updatePlayerTurn(currentPlayer)
  }
}

module.exports = {
  onPlayerMove
}
