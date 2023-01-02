const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  organisme: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organismes'
    }
  ],
  role: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Roles'
    }
  ],
  formation: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Formations'
    }
  ]
})

module.exports = mongoose.model('Users', userSchema)