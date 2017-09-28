'use strict'

const winningMove = function (currentPlayer, clickedSquare) {
  console.log('currentPlayer is ', currentPlayer)
  console.log('clicked square is ', clickedSquare)

  if (clickedSquare === '0') {
    if (($('#1 > p').text() === currentPlayer && ($('#2 > p').text() === currentPlayer)) || ($('#3 > p').text() === currentPlayer && ($('#6 > p').text() === currentPlayer)) || ($('#4 > p').text() === currentPlayer && ($('#8 > p').text() === currentPlayer))) {
      return true
    }
  } else if (clickedSquare === '1') {
    if (($('#0 > p').text() === currentPlayer && ($('#2 > p').text() === currentPlayer)) || ($('#4 > p').text() === currentPlayer && ($('#7 > p').text() === currentPlayer))) {
      return true
    }
  } else if (clickedSquare === '2') {
    if (($('#0 > p').text() === currentPlayer && ($('#1 > p').text() === currentPlayer)) || ($('#4 > p').text() === currentPlayer && ($('#6 > p').text() === currentPlayer)) || ($('#5 > p').text() === currentPlayer && ($('#8 > p').text() === currentPlayer))) {
      return true
    }
  } else if (clickedSquare === '3') {
    if (($('#0 > p').text() === currentPlayer && ($('#6 > p').text() === currentPlayer)) || ($('#4 > p').text() === currentPlayer && ($('#5 > p').text() === currentPlayer))) {
      return true
    }
  } else if (clickedSquare === '4') {
    if (($('#0 > p').text() === currentPlayer && ($('#8 > p').text() === currentPlayer)) || ($('#1 > p').text() === currentPlayer && ($('#7 > p').text() === currentPlayer)) || ($('#2 > p').text() === currentPlayer && ($('#6 > p').text() === currentPlayer)) || ($('#3 > p').text() === currentPlayer && ($('#5 > p').text() === currentPlayer))) {
      return true
    }
  } else if (clickedSquare === '5') {
    if (($('#2 > p').text() === currentPlayer && ($('#8 > p').text() === currentPlayer)) || ($('#3 > p').text() === currentPlayer && ($('#4 > p').text() === currentPlayer))) {
      return true
    }
  } else if (clickedSquare === '6') {
    if (($('#0 > p').text() === currentPlayer && ($('#3 > p').text() === currentPlayer)) || ($('#2 > p').text() === currentPlayer && ($('#4 > p').text() === currentPlayer)) || ($('#7 > p').text() === currentPlayer && ($('#8 > p').text() === currentPlayer))) {
      return true
    }
  } else if (clickedSquare === '7') {
    if (($('#1 > p').text() === currentPlayer && ($('#4 > p').text() === currentPlayer)) || ($('#6 > p').text() === currentPlayer && ($('#8 > p').text() === currentPlayer))) {
      return true
    }
  } else if (clickedSquare === '8') {
    if (($('#0 > p').text() === currentPlayer && ($('#4 > p').text() === currentPlayer)) || ($('#2 > p').text() === currentPlayer && ($('#5 > p').text() === currentPlayer)) || ($('#6 > p').text() === currentPlayer && ($('#7 > p').text() === currentPlayer))) {
      return true
    }
  }
}

module.exports = {
  winningMove
}
