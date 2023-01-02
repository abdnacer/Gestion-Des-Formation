const mongoose = require('mongoose')

const DB = mongoose.connect(process.env.DB, () => console.log('Database Connected'))

module.exports = DB