const User = require('../../models/users')
const Organisme = require('../../models/organisme')
const Formation = require('../../models/formation')
const Historique = require('../../models/historique')
const Storage = require('local-storage')
const jwt = require('jsonwebtoken')

// const getDataEmploye = async (req, res) => {
//   const id_role = '63b2b97f5dd2a6b85bb15d57'

//   // function equals
//   const userEmploye = await User.find({ role: id_role })
//     .populate({ path: 'organisme', model: Organisme })
//     .populate({ path: 'formation', model: Formation })

//   res.json({ userEmploye })
// }

const getEmploye = async (req, res) => {
  const token = Storage('token')

  const token_user = await jwt.verify(token, process.env.SECRET)
  if(token_user){
    const user = await User.findById({_id: token_user.id})
    if(user) res.send(user)
    else throw Error('User Not Found')
  }
  else throw Error('Token Not Correct')
}

const getDataEmployeFormation = async (req, res) => {
  const token = Storage('token')

  const token_user = await jwt.verify(token, process.env.SECRET)

  const user = await User.findById({ _id: token_user.id })

  const formation = await Formation.findById({_id: user.formation})
  const organisme = await Organisme.findById({_id: user.organisme})
  res.json({formation, organisme})
}

const getDataHistorique = async (req, res) => {
  const token = Storage('token')

  if (token) {
    const token_user = await jwt.verify(token, process.env.SECRET)
    if (token_user) {
      const dataHistoriqueEmploye = await Historique.find({ users: token_user.id })
      .populate({ path: 'organisme', model: Organisme })
      .populate({ path: 'formation', model: Formation })

      if (dataHistoriqueEmploye) res.json({dataHistoriqueEmploye})
      else throw Error('Data To This Employe No Found')
    } else throw Error('Token The User Not Correct')
  } else throw Error('Not Token')
}

module.exports = {
  // getDataEmploye,
  getEmploye,
  getDataHistorique,
  getDataEmployeFormation
}