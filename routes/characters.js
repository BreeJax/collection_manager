const mongoose = require("mongoose")
const ObjectId = require("mongodb").ObjectId
const Character = require("../models/charSchema")

mongoose.promise = global.promise

module.exports = app => {
  app.get("/", (req, res) => {
    Character.find({})
      .then(characters => {
        res.render("home", { characters })
      })
      .catch(err => {
        res.json(err)
      })
  })

  app.get("/info_personal/:id", (req, res) => {
    const requestId = req.params.id

    Character.findOne({ _id: ObjectId(requestId) })
      .then(character => {
        res.render("info_personal", { character })
      })
      .catch(err => {
        res.json(err)
      })
  })

  app.get("/createChar", (req, res) => {
    res.render("createChar")
  })

  app.post("/createChar", (req, res) => {
    Character.create(req.body)
      .then(doc => {
        res.redirect("/")
      })
      .catch(err => {
        res.render("createChar", { err })
      })
  })

  app.post("/info_personal/:id/delete", (req, res) => {
    const requestId = new ObjectId(req.params.id)
    Character.deleteOne({ _id: requestId })
      .then(res.redirect("/"))
      .catch(err => {
        res.json(err)
      })
  })
  app.post("/info_personal/:id/edit", (req, res) => {
    const requestId = ObjectId(req.params.id)
    Character.updateOne({ _id: requestId }, req.body)
      .then(res.redirect("/"))
      .catch(err => {
        res.json(err)
      })
  })
}
