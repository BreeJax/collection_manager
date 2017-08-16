console.log("Working with mongoose")

const mongoose = require("mongoose")

mongoose.promise = global.promise
mongoose.connect("mongodb://localhost:27017/hpCharacterSchemaDB")

const hpCharacterSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Character needs a name"], unique: true },
  house: {
    type: String,
    enum: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    message: "You must chose one of the 4 Hogwarts Houses"
  },
  yearBorn: { type: Number, required: true },
  facialCharacteristics: [
    {
      hair: { type: String, required: true, trim: true },
      eyeColor: { type: String, lowercase: true, trim: true },
      unique: { type: String, lowercase: true, trim: true }
    }
  ]
})

const Character = mongoose.model("Character", hpCharacterSchema)

module.exports = Character

//enum means enumerated types, which means it's being limited to this type
