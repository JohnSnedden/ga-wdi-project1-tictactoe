'use strict'

const outcome = require('./outcome.js')

let gameComplete = false
let gameResult = null
let movesPlayed = 0

// who is the current player
// which square was clicked
// check if square has been played
// change the square value to the player symbol
// check for a win
// change the turn indicator to other player
// check for a draw
// update display to show result

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
    // also change mouseover behavior for played square
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
    if (playerWonGame === true) {
      gameComplete = true
      gameResult = currentPlayer + 'win'
      allSquaresNotAllowed()
      movesPlayed++
    }
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

  const gameCompleteUpdates = function (gameResult) {
    console.log('were inside the gameCompleteUpdates function')
    $('#game-outcome-info > p').text(gameResult)
    // $('#player-turn-info').hide()
    // $('#game-outcome-info').show()
    // const x = document.getElementById('player-turn-info')
    // console.log('x is ', x)
    // x.style.display = 'none'
    // $('#game-outcome-info').style.display = 'block'
  }

  const currentPlayer = currentPlayerIs()
  const clickedSquare = $(this).attr('id')
  console.log('player', currentPlayer, 'clicked square', clickedSquare)
  if (gameComplete === false && isSquareOpen(clickedSquare) === true) {
    updateSquare(currentPlayer, clickedSquare)
    didPlayerWin(currentPlayer, clickedSquare)
  }
  if (gameComplete === false) {
    updatePlayerTurn(currentPlayer)
    wasGameDrawn(movesPlayed)
  }
  if (gameComplete === true) {
    gameCompleteUpdates(gameResult)
  }
  console.log('movesPlayed is', movesPlayed)
  console.log('gameResult is', gameResult)
  console.log('gameComplete is', gameComplete)
  console.log('-------------------------')
}

module.exports = {
  onPlayerMove
}
