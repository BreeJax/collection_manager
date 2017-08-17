const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")
//const MongoClient = require("mongodb").MongoClient --This is being replaced by mongoose.promise
const ObjectId = require("mongodb").ObjectId
const assert = require("assert")
const mongoose = require("mongoose")

mongoose.promise = global.promise
mongoose.connect("mongodb://localhost:27017/hpCharacterSchemaDB", () => {
  console.log("connected to mongodb!!!!")
})
const Character = require("./charSchema")

const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./templates")
app.set("view engine", "mustache")

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
  Character.deleteOne({ _id: requestId }).then(res.redirect("/")).catch(err => {
    res.json(err)
  })
})
app.post("/info_personal/:id/edit", (req, res) => {
  const requestId = ObjectId(req.params.id)
  Character.updateOne({ _id: requestId }, req.body).then(res.redirect("/")).catch(err => {
    res.json(err)
  })
})

app.listen(3000, () => {
  console.log("I've got the magic in me!")
})
