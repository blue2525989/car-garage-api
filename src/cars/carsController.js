'use strict'

const path = require('path')
const carsService = require(path.resolve(__dirname, './carsService.js'))()

module.exports = () => {
  async function post(request) {
    return await carsService.post(request.payload)
  }
  async function get(request) {
    return await carsService.get(request.params)
  }

  return {
    post,
    get
  }
}
