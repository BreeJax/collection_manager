const mongoose = require("mongoose")
const ObjectId = require("mongodb").ObjectId
const Character = require("../models/charSchema")

mongoose.promise = global.promise

module.exports = app => {
  app.get("/enroll", (request, response) => {
    Character.find({ house: "", yearBorn: { $gt: 1998 } })
      .then(characters => {
        response.render("enroll", { characters })
      })
      .catch(err => {
        console.log(err)
      })
  })
}
