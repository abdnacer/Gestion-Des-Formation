const mongoose = require('mongoose')

const formationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, 
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  debut: {
    type: Date,
    required: true,
    trim: true
  },
  fin: {
    type: Date,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('Formations', formationSchema)