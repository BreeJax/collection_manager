const mongoose = require("mongoose")
const ObjectId = require("mongodb").ObjectId
const Character = require("../models/charSchema")

mongoose.promise = global.promise

module.exports = app => {
  app.get("/enroll", (req, res) => {
    Character.find({age: <19})

    res.render("enroll")
  })
}
