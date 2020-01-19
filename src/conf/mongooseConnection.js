'use strict'
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('We\'re connected!')
})

module.exports = db
//
// const MongoClient = require('mongodb').MongoClient


// module.exports = () => {
//   // Connection URL
//   const url = 'mongodb://localhost:27017'
//   // Database Name
//   const dbName = 'carGarage'
//   // Create a new MongoClient
//   const client = new MongoClient(url)
//   // variable for db
//   let database
//   // Use connect method to connect to the Server
//   client.connect(function(err, client) {
//     console.log("Connected correctly to server");
//
//     database = client.db(dbName)
//   })
//   return {
//     database: client.db(dbName)
//   }
//
// }
