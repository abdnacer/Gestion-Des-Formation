const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connectDB = mongoose.connect(process.env.DB)
  .then(() =>  {
      console.log('Database Connected')
  }) 
  .catch(error => {
      console.log(error);
  })

module.exports = connectDB