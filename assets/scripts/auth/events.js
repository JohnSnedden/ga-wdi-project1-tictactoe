'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const moves = require('../game-engine/moves.js')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  moves.resetGameBoard()
  $('#sessionScoreX > p').text(0)
  $('#sessionScoreO > p').text(0)
}

const onNewUser = function () {
  event.preventDefault()
  $('#sign-in-div').addClass('hidden')
  $('#sign-up-div').removeClass('hidden')
}

const onChangePasswordBtn = function () {
  event.preventDefault()
  $('#change-password-div').removeClass('hidden')
  $('#change-password-btn').addClass('hidden')
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-user').click(onNewUser)
  $('#change-password-btn').click(onChangePasswordBtn)
}

module.exports = {
  addHandlers
}
