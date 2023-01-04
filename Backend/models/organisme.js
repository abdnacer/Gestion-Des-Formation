const mongoose = require('mongoose')

const organismeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ville: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('Organismes', organismeSchema)