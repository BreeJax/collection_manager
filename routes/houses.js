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
  app.post("/enroll/:id", (request, response) => {
    const id = request.params.id
    Character.findOne({ _id: ObjectId(id) }).then(person => {
      person
        .sortCharacterIntoHouse()
        .then(doc => response.redirect("/info_personal/" + id))
        .catch(err => response.json(err))
    })
  })
  app.get("/GRHS/Hufflepuff", (request, response) => {
    Character.find({ house: "Hufflepuff" })
      .then(characters => {
        response.render("GRHS", { characters })
      })
      .catch(err => {
        console.log(err)
      })
  })
  app.get("/GRHS/Ravenclaw", (request, response) => {
    Character.find({ house: "Ravenclaw" })
      .then(characters => {
        response.render("GRHS", { characters })
      })
      .catch(err => {
        console.log(err)
      })
  })
  app.get("/GRHS/Slytherin", (request, response) => {
    Character.find({ house: "Slytherin" })
      .then(characters => {
        response.render("GRHS", { characters })
      })
      .catch(err => {
        console.log(err)
      })
  })
  app.get("/GRHS/Gryffindor", (request, response) => {
    Character.find({ house: "Gryffindor" })
      .then(characters => {
        response.render("GRHS", { characters })
      })
      .catch(err => {
        console.log(err)
      })
  })
}
