const mongoose = require('mongoose')
const superheroSchema = mongoose.Schema({
  superhero:{
    type: String,
    require: true,
    unique: true
  },
  real_name:{
    type: String,
    require: true
  },
  super_power:{
    type: String,
    require: true
  }
})

module.exports = mongoose.model('SuperheroCollection_v2', superheroSchema)