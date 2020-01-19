'use strict'

const Hapi = require('@hapi/hapi')
const path = require('path')

const partsRoutes = require(path.resolve(__dirname, './parts/partsRoutes'))
const carsRoutes = require(path.resolve(__dirname, './cars/carsRoutes'))

module.exports = () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  return {
    async init() {
      // initialize routes
      server.route([...partsRoutes, ...carsRoutes])
      // start the server
      await server.start();
      console.log('Server running on %s', server.info.uri);

      process.on('unhandledRejection', (err) => {

      console.log(err)
      process.exit(1)
      })
    },
    server
  }
}
