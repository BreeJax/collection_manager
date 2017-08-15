const mongoose = require("mongoose")

mongoose.promise = global.promise
mongoose.connect("mongodb://localhost:27017/hpCharacterSchemaDB")

const Character = require("./charSchema")

//adding characters
// Character.create({
//   name: "Harry",
//   house: "Gryffindor",
//   yearBorn: 1979,
//   facialCharacteristics: [{ hair: "black", eyeColor: "green", unique: "lighting scar on forehead" }]
// })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// //query for something
// Character.find({})
//   .select("name")
//   .then(Characters => {
//     console.log(Characters)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// //update
// Character.updateOne({ name: "Lily" }, { name: "Lily Potter" })
//   .then(doc => {
//     console.log("wooot", doc)
//   })
//   .catch(err => {
//     console.log("nooooope", err)
//   })

// //delete
// Character.deleteOne({ name: "Lily Potter" })
//   .then(doc => {
//     console.log("wooot", doc)
//   })
//   .catch(err => {
//     console.log("nooooope", err)
//   })
