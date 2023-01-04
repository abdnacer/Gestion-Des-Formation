const express = require('express')
const multer = require('multer')
const app = express()
require('dotenv').config()
require('./config/db')
require('./models')
const path = require('path')
const upload = multer({
  dest: 'public/images/'
})
const port = process.env.PORT || 7070


app.use(express.json())
app.use(express.urlencoded({extends: true}))
app.use(express.static(path.join(__dirname, 'public/images')))

const authRoutes = require('./routes/authRoutes/authRoutes')
const adminRoutes = require('./routes/userRoutes/adminRoutes')
const employeRoutes = require('./routes/userRoutes/employeRoutes')
const formationRoutes = require('./routes/userRoutes/formationRouter')
const organismeRoutes = require('./routes/userRoutes/organismeRoutes')

app.use('/api/auth', authRoutes)
app.use('/api/user', adminRoutes)
app.use('/api/user', employeRoutes)
app.use('/api/user', formationRoutes)
app.use('/api/user', organismeRoutes)


app.listen(port, () => console.log(`server is running on port ${port}`))

module.exports = app