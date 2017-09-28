'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

// change turn indicator
const playerTurn = function () {
  console.log('turn indicator was ', $('#turn-indicator').text())
  if ($('#turn-indicator').text() === '' || $('#turn-indicator').text() === 'O') {
    $('#turn-indicator').text('X')
  } else {
    $('#turn-indicator').text('O')
  }
  console.log('turn indicator is now ', $('#turn-indicator').text())
}

// identify which game square was clicked
const onSquareClick = function (event) {
  const square = $(this).attr('id')
  console.log('in events.js user clicked ', square)
  playerTurn()
}

const addHandlers = function () {
  $('.gameSquare').on('click', onSquareClick)
}

module.exports = {
  addHandlers
}
