'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up sussessfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed in sussessfully')
  store.user = data.user
  console.log('store.user is ', store.user)
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
