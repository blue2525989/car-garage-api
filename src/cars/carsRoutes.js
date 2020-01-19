'use strict'

const Joi = require('@hapi/joi')
const path = require('path')
const carsController = require(path.resolve(__dirname, './carsController.js'))()

const root = 'cars'
module.exports = [
  {
      method: 'POST',
      path: `/${root}`,
      handler: carsController.post
      // ,
      // options: {
      //   validate: {
      //     payload: {
      //                 carType: Joi.string().required().example('Subaru wrx limited'),
      //                 carName: Joi.string().required().example('Jason\'s wrx'),
      //                 owner: Joi.string().required().example('Jason'),
      //                 color: Joi.string().required().example('red'),
      //                 transmission: Joi.string().required().example('MT')
      //               }
      //   }
      // }
  },
  {
      method: 'GET',
      path: `/${root}`,
      handler: carsController.get
  }
]
