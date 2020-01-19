'use strict'
const path = require('path')
const database = require(path.resolve(__dirname, '../conf/mongooseConnection'))

module.exports = () => {
  async function post(part) {
    console.log(database)
    // let result = database.collection('inserts').insertsOne(part)
    // return result
  }

  async function get(params) {

      // console.log(database())
      // let result = database().collection('inserts').insertsOne(params)
      // return result
  }

  return {
    post,
    get
  }
}
