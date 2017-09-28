'use strict'

// who is the current player
// which square was clicked
// change the square value to the player symbol
// change the turn indicator to other player

const onPlayerMove = function (event) {
  // identify current player
  const currentPlayerIs = function () {
    const currentPlayerIndicator = $('#turn-indicator').text()
    return currentPlayerIndicator
  }

  // update board with user move
  const updateSquare = function (currentPlayer, clickedSquare) {
    $('#' + clickedSquare + ' > p').text(currentPlayer)
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
  updateSquare(currentPlayer, clickedSquare)
  updatePlayerTurn(currentPlayer)
}

module.exports = {
  onPlayerMove
}
