console.log("Working with mongoose")

const mongoose = require("mongoose")

mongoose.promise = global.promise
mongoose.connect("mongodb://localhost:27017/hpCharacterSchemaDB")

const hpCharacterSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Character needs a name"], unique: true },
  house: {
    type: String,
    //enum means enumerated types, which means it's being limited to this type
    enum: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin", ""],
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
// //virtual fields
hpCharacterSchema
  .virtual("age")
  .get(function() {
    return new Date().getFullYear() - this.yearBorn
  })
  .set(function(val) {
    this.yearBorn = new Date().getFullYear() - val
  })

// let new Kid = new Character()
//   newKid.sortinhouse ()
// new kid
//
// luna.sortinhouse()
//
// //cb = call back
//
// hpCharacterSchema.methods.sortinhouse = () => {
//   this.house = math.random
// }

const Character = mongoose.model("Character", hpCharacterSchema)

module.exports = Character
