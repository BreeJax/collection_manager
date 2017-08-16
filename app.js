const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")
//const MongoClient = require("mongodb").MongoClient --This is being replaced by mongoose.promise
// const ObjectId = require("mongodb").ObjectId
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
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  Character.find({})
    .then(characters => {
      res.render("home", { characters })
    })
    .catch(err => {
      res.json(err)
    })
})

app.listen(3000, () => {
  console.log("I've got the magic in me!")
})
