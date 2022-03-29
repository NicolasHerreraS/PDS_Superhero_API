const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { arrayBuffer } = require('stream/consumers');
const superheroSchema = mongoose.Schema({
  superhero__name:{
    type: String,
    require: true,
    unique: true
  },
  real_name:{
    type: String,
    require: true
  },
  features:{
    type:Object,
    require:true,
    universe:{
      type:String,
      require:true
    },
    sidekick: {
      type: Object,
      require: true,
      sidekick_name:{
        type: Array,
        require: true,
      },
      superpowers:{
        type: Array,
        require: true
      }
    },
    superpowers:{
      type: Array,
      require: true
    }
  }
});

module.exports = mongoose.model('SuperheroCollection', superheroSchema);
