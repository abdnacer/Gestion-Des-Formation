const mongoose = require('mongoose')

const historiqueSchema = mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },

  formation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Formation'
  },
  
  organisme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organisme'
  }
})

module.exports = mongoose.model('Historique', historiqueSchema)