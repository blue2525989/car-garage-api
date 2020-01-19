'use strict'

const path = require('path')
const db = require(path.resolve(__dirname, '../conf/mongooseConnection'))
const Car = require('./Car')

module.exports = () => {
  async function post(car) {
    console.log(db.models.Car)
    db.collections('cars', car)
    const Car = db.models.Car
    const newCar = new Car(car)
    console.log(newCar)
    //   console.log(db.save)
    //     console.log(Object.keys(db))
    //         console.log(db.models.Car)
    //
    // newCar.save((err, car) => {
    //   if (err) {
    //     return err
    //   }
    //   return car
    // })
  }

  async function get(params) {
    return 'getting cars'
  }

  return {
    post,
    get
  }
}
