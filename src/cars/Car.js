'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
  make:  String, // String is shorthand for {type: String}
  model: String,
  year:   Number,
  description: { body: String, date: Date },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
})

// carSchema.methods.toString = function(cb) {
//     return `${this.year} ${this.make} ${this.model}`
// }

carSchema.methods.findSimilarTypes = function(cb) {
    return this.model('Car').find({ make: this.make, model: this.model }, cb);
}
mongoose.model('Car', carSchema)
