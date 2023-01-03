const mongoose = require('mongoose')

const formationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  images: {
    type: Array,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  debut: {
    type: String,
    required: true,
    trim: true
  },
  fin: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('Formations', formationSchema)