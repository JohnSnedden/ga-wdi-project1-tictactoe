'use strict'

const moves = require('./moves.js')

// const getFormFields = require('../../../lib/get-form-fields')

const addHandlers = function () {
  $('.gameSquare').on('click', moves.onPlayerMove)
}

module.exports = {
  addHandlers
}
