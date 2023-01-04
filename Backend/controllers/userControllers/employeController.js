// const User = require('../../models/users')
// const Organisme = require('../../models/organisme')
// const Formation = require('../../models/formation')
const Storage = require('local-storage')
const jwt = require('jsonwebtoken')


const getDataEmploye = async (req, res) => {
  const token = Storage('token')
  if (token) {
    const token_user = await jwt.verify(token, process.env.SECRET)
    res.send(token_user)
  }
  else throw Error('Token Not Found')

}

module.exports = {
  getDataEmploye,
}