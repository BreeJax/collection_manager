const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
//const MongoClient = require("mongodb").MongoClient --This is being replaced by mongoose.promise
// const ObjectId = require("mongodb").ObjectId
const assert = require("assert")

const app = express()

app.set("views", "./templates")
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
  console.log("I've got the magic in me!")
})
