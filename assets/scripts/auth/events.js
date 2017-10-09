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
  $('#nav-user-dropdown-change-password').removeClass('disabled')
}

const onNewUser = function () {
  event.preventDefault()
  $('#sign-in-div').addClass('hidden')
  $('#sign-up-div').removeClass('hidden')
}

const onNewUserCancel = function () {
  event.preventDefault()
  $('#sign-up-div').addClass('hidden')
  $('#sign-in-div').removeClass('hidden')
}

const onChangePasswordBtn = function () {
  event.preventDefault()
  $('#change-password-div').removeClass('hidden')
  $('#nav-user-dropdown-change-password').addClass('disabled')
}

const onChangePasswordCancel = function () {
  event.preventDefault()
  $('#nav-user-dropdown-change-password').removeClass('disabled')
  $('#change-password-div').addClass('hidden')
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)

  $('#new-user').click(onNewUser)
  $('#new-user-cancel').click(onNewUserCancel)

  $('#nav-user-dropdown-sign-out').click(onSignOut)
  $('#nav-user-dropdown-change-password').click(onChangePasswordBtn)
  $('#change-password-cancel').click(onChangePasswordCancel)
}

module.exports = {
  addHandlers
}
