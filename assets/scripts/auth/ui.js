'use strict'

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up sussessfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
