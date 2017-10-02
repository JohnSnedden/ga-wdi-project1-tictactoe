'use strict'

const store = require('../store.js')
// const gameUi = require('../game-api/ui.js')

const signUpSuccess = function (data) {
  $('#message').text('New user created, please sign in')
  $('#sign-up-div').addClass('hidden')
  $('#sign-in-div').removeClass('hidden')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in sussessfully')
  store.user = data.user
  $('#sign-in-div').addClass('hidden')
  $('#nav-bar').removeClass('hidden')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  $('#message').text('Password changed sussessfully')
  $('#change-password-div').addClass('hidden')
  $('#change-password-btn').removeClass('hidden')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error changing password')
}

const signOutSuccess = function () {
  $('#message').text('Sign Out sussessfull')
  store.user = null
  $('#nav-bar').addClass('hidden')
  $('#game-grid-div').addClass('hidden')
  $('#session-score-div').addClass('hidden')
  $('#player-turn-div').addClass('hidden')
  $('#sign-in-div').removeClass('hidden')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error Signing Out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
