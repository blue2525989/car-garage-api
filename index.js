'use strict';

const server = require('./src/server')()

async function init () {
  await server.init()
}
init()
