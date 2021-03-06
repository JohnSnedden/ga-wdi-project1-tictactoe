'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEngineEvents = require('./game-engine/events.js')
const authEvents = require('./auth/events.js')
const gameApiEvents = require('./game-api/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  gameEngineEvents.addHandlers()
  authEvents.addHandlers()
  gameApiEvents.addHandlers()
})
