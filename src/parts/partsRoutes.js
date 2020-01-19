'use strict'

const path = require('path')
const partsController = require(path.resolve(__dirname, './partsController.js'))()

const root = 'parts'
module.exports = [
  {
      method: 'POST',
      path: `/${root}`,
      handler: partsController.post
  },
  {
      method: 'GET',
      path: `/${root}`,
      handler: partsController.get
  }
]
