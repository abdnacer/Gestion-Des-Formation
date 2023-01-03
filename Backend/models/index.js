const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose

db.users = require('./users')
db.role = require('./role')
db.organisme = require('./organisme')
db.formation = require('./formation')

db.role.estimatedDocumentCount((err, count) => {
  if(!err && count === 0){
    new db.role({
      name: 'admin'
    })
    .save(err => {
      if(err) console.log("Error", err)
      console.log("Added 'Manager' to roles collection ")
    })

    new db.role({
      name: 'employe'
    })
    .save(err => {
      if(err) console.log('Error', err)
      console.log("Added 'Employe' to role collection")
    })
  }
})

module.exports = db