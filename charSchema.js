console.log("Working with mongoose")

const mongoose = require("mongoose")

const hpCharacterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  house: String,
  yearBorn: { type: Number },
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
