'use strict'

const path = require('path')
const partsService = require(path.resolve(__dirname, './partsService.js'))()

module.exports = () => {
  async function post(request) {
    return await partsService.post()
  }
  async function get(request) {
    return await partsService.get()
  }

  return {
    post,
    get
  }
}
